import {
  AddressAndPaymentContainer,
  CheckoutContainer,
  OrderContainer,
} from './styles'

import { AddressDetails } from './components/AddressDetails'
import { PaymentOptions } from './components/PaymentOptions'
import { OrderDetails } from './components/OrderDetails'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .nonempty('Informe o CEP')
    .min(8, 'CEP inválido')
    .max(9, 'CEP inválido'),
  street: zod.string().nonempty('Informe a Rua').min(1, 'Rua Inválida'),
  number: zod.number().min(1, 'Informe seu número'),
  additional: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro').nonempty(),
  city: zod.string().min(1, 'Informe a cidade').nonempty(),
  state: zod.string().min(2, 'Informe o UF').nonempty(),
  paymentMethod: zod.enum(['creditCard', 'debitCart', 'cash']),
})

export type NewAddressFormData = zod.infer<
  typeof newAddressFormValidationSchema
>

interface AddressType extends NewAddressFormData {
  id: string
}

export function Checkout() {
  const navigate = useNavigate()

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      additional: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, reset } = newAddressForm

  function handleCreateNewCoffeeRequest(data: NewAddressFormData) {
    try {
      const id = String(new Date().getTime())

      const newCoffeeRequest: AddressType = {
        id,
        cep: data.cep,
        street: data.street,
        additional: data.additional,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
        paymentMethod: data.paymentMethod,
      }

      reset()

      navigate('/success')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewCoffeeRequest)}>
      <CheckoutContainer>
        <FormProvider {...newAddressForm}>
          <AddressAndPaymentContainer>
            <h2>Complete seu pedido</h2>

            <AddressDetails />
            <PaymentOptions />
          </AddressAndPaymentContainer>
          <OrderContainer>
            <h2>Cafés selecionados</h2>

            <OrderDetails />
          </OrderContainer>
        </FormProvider>
      </CheckoutContainer>
    </form>
  )
}
