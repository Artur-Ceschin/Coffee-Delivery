import { MapPinLine } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import {
  AddressContainer,
  BaseInput,
  AddressFormContainer,
  FlexAddressForm,
  HeadingTitle,
} from './styles'

export function AddressDetails() {
  const theme = useTheme()
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
        <div>
          <BaseInput width={200} type="text" placeholder="CEP" />
        </div>
        <div>
          <BaseInput type="text" placeholder="Rua" />
        </div>
        <FlexAddressForm>
          <BaseInput placeholder="Número" width={200} />
          <BaseInput placeholder="Complemento" />
        </FlexAddressForm>
        <FlexAddressForm>
          <BaseInput placeholder="Bairro" width={200} />
          <BaseInput placeholder="Cidade" />
          <BaseInput placeholder="UF" width={60} />
        </FlexAddressForm>
      </AddressFormContainer>
    </AddressContainer>
  )
}
