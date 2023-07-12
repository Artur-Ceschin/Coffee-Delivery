import { CurrencyDollar, CreditCard, Bank, Money } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import {
  PaymentOptionsContainer,
  HeadingTitle,
  PaymentMethodsContainer,
  PaymentMethodButton,
  ErrorTest,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { NewAddressFormData } from '../..'

export function PaymentOptions() {
  const theme = useTheme()

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<NewAddressFormData>()

  const paymentMethod = watch('paymentMethod')

  return (
    <PaymentOptionsContainer>
      <HeadingTitle className="heading">
        <CurrencyDollar size={22} color={theme?.purple} />
        <div>
          <h3>Pagamento</h3>
          <p className="subtitle">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </HeadingTitle>

      <PaymentMethodsContainer>
        <PaymentMethodButton
          htmlFor="creditCard"
          checked={paymentMethod === 'creditCard'}
          error_border={errors.paymentMethod ? 1 : 0}
        >
          <CreditCard color={theme?.purple} />
          <input
            id="creditCard"
            type="radio"
            {...register('paymentMethod')}
            value="creditCard"
          />
          <p>Cartão de crédito</p>
        </PaymentMethodButton>

        <PaymentMethodButton
          htmlFor="debitCart"
          checked={paymentMethod === 'debitCart'}
          error_border={errors.paymentMethod ? 1 : 0}
        >
          <Bank color={theme?.purple} />

          <input
            id="debitCart"
            type="radio"
            {...register('paymentMethod')}
            value="debitCart"
          />
          <p>Cartão de débito</p>
        </PaymentMethodButton>

        <PaymentMethodButton
          htmlFor="cash"
          checked={paymentMethod === 'cash'}
          error_border={errors.paymentMethod ? 1 : 0}
        >
          <Money color={theme?.purple} />

          <input
            id="cash"
            type="radio"
            {...register('paymentMethod')}
            value="cash"
          />
          <p>Dinheiro</p>
        </PaymentMethodButton>
      </PaymentMethodsContainer>

      {errors.paymentMethod && (
        <ErrorTest>Selecione uma forma de pagamento</ErrorTest>
      )}
    </PaymentOptionsContainer>
  )
}
