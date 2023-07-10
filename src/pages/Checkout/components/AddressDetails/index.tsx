import { MapPinLine } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import {
  AddressContainer,
  BaseInput,
  AddressFormContainer,
  FlexAddressForm,
  HeadingTitle,
  InputContainer,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { NewAddressFormData } from '../..'

export function AddressDetails() {
  const theme = useTheme()

  const {
    register,
    formState: { errors },
  } = useFormContext<NewAddressFormData>()

  return (
    <AddressContainer>
      <HeadingTitle className="heading">
        <MapPinLine size={22} color={theme?.['yellow-dark']} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p className="subtitle">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </HeadingTitle>

      <AddressFormContainer>
        <InputContainer width={200}>
          <BaseInput
            id="cep"
            type="text"
            placeholder="CEP"
            {...register('cep')}
          />
          {errors.cep && <span>{errors.cep.message}</span>}
        </InputContainer>

        <InputContainer>
          <BaseInput
            id="street"
            type="text"
            placeholder="Rua"
            {...register('street')}
          />
          {errors.street && <span>{errors.street.message}</span>}
        </InputContainer>
        <FlexAddressForm>
          <InputContainer width={200}>
            <BaseInput
              placeholder="Número"
              {...register('number', { valueAsNumber: true })}
            />
            {errors.number && <span>{errors.number.message}</span>}
          </InputContainer>
          <InputContainer>
            <BaseInput placeholder="Complemento" {...register('additional')} />
            {errors.additional && <span>{errors.additional.message}</span>}
          </InputContainer>
        </FlexAddressForm>
        <FlexAddressForm>
          <InputContainer width={200}>
            <BaseInput placeholder="Bairro" {...register('neighborhood')} />
            {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
          </InputContainer>
          <InputContainer>
            <BaseInput placeholder="Cidade" {...register('city')} />
            {errors.city && <span>{errors.city.message}</span>}
          </InputContainer>
          <InputContainer width={60}>
            <BaseInput placeholder="UF" {...register('state')} />
            {errors.state && <span>{errors.state.message}</span>}
          </InputContainer>
        </FlexAddressForm>
      </AddressFormContainer>
    </AddressContainer>
  )
}
