import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import {
  AddressesContainer,
  CartButton,
  CartQuantityCircle,
  HeaderContainer,
  RightHeaderContainer,
} from './styles'
import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { coffeesOnCart } = useContext(CartContext)

  const theme = useTheme()
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="Imagem de um copo com café" />
      </Link>

      <RightHeaderContainer>
        <AddressesContainer>
          <MapPin size={22} color={theme?.purple} weight="fill" />
          <p>São Paulo, SP</p>
        </AddressesContainer>

        <Link to="/checkout">
          <CartButton>
            <ShoppingCart
              size={22}
              weight="fill"
              color={theme?.['yellow-dark']}
            />

            {coffeesOnCart.length ? (
              <CartQuantityCircle className="quantity-on-cart">
                {coffeesOnCart.length}
              </CartQuantityCircle>
            ) : (
              ''
            )}
          </CartButton>
        </Link>
      </RightHeaderContainer>
    </HeaderContainer>
  )
}
