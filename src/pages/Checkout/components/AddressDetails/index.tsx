import { MapPinLine } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import {
  AddressContainer,
  BaseInput,
  AddressFormContainer,
  FlexAddressForm,
  HeadingTitle,
  InputContainer,
  BaseSelect,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { NewAddressFormData } from '../..'
import { UF } from '../../../../utils/states'

interface ViaCepType {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: number
  gia: number
  ddd: number
  siafi: number
}

export function AddressDetails() {
  const theme = useTheme()

  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<NewAddressFormData>()

  const street = watch('street')
  const neighborhood = watch('neighborhood')
  const city = watch('city')
  const state = watch('state')

  async function onBlurGetCEPData() {
    try {
      const cep = watch('cep')

      const formattedCep = cep?.replace(/[^0-9]/g, '')

      if (formattedCep.length !== 8) {
        return null
      }

      const cepData = await fetch(
        `https://viacep.com.br/ws/${formattedCep}/json/`,
      )
      const response: ViaCepType = await cepData.json()

      setValue('street', response.logradouro)
      setValue('neighborhood', response.bairro)
      setValue('city', response.localidade)
      setValue('state', response.uf)
    } catch (err) {
      console.error(err)
    }
  }

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
            onBlur={onBlurGetCEPData}
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
          {errors.street && !street && <span>{errors.street.message}</span>}
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
            {errors.neighborhood && !neighborhood && (
              <span>{errors.neighborhood.message}</span>
            )}
          </InputContainer>
          <InputContainer>
            <BaseInput placeholder="Cidade" {...register('city')} />
            {errors.city && !city && <span>{errors.city.message}</span>}
          </InputContainer>
          <InputContainer width={60}>
            <BaseSelect aria-label="Estados UF" {...register('state')} id="uf">
              <option value="" disabled defaultValue="UF">
                UF
              </option>
              {Object.values(UF).map((uf: UF) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </BaseSelect>
            {errors.state && !state && <span>{errors.state.message}</span>}
          </InputContainer>
        </FlexAddressForm>
      </AddressFormContainer>
    </AddressContainer>
  )
}
