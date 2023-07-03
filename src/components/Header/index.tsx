import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import {
  AddressesContainer,
  HeaderContainer,
  RightHeaderContainer,
} from './styles'
import { useTheme } from 'styled-components'
export function Header() {
  const theme = useTheme()
  return (
    <HeaderContainer>
      <a href="/">
        <img src={coffeeDeliveryLogo} alt="Imagem de um copo com café" />
      </a>

      <RightHeaderContainer>
        <AddressesContainer>
          <MapPin size={22} color={theme?.purple} weight="fill" />
          <p>Porto Alegre, RS</p>
        </AddressesContainer>

        <a href="/checkout">
          <ShoppingCart
            size={22}
            weight="fill"
            color={theme?.['yellow-dark']}
          />
        </a>
      </RightHeaderContainer>
    </HeaderContainer>
  )
}
