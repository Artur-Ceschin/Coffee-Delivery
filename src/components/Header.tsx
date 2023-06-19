import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../assets/logo-coffee-delivery.png'
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
      <span>
        <img src={logoCoffeeDelivery} alt="Imagem de um copo com café" />
      </span>

      <RightHeaderContainer>
        <AddressesContainer>
          <MapPin size={22} color={theme?.purple} weight="fill" />
          <p>Porto Alegre, RS</p>
        </AddressesContainer>

        <a>
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
