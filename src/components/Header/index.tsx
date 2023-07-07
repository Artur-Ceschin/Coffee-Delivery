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
import { CoffeesContext } from '../../context/CoffeesContext'
export function Header() {
  const { coffeesOnCart } = useContext(CoffeesContext)

  const coffeesOnCartQuantity = coffeesOnCart.length

  const theme = useTheme()
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="Imagem de um copo com café" />
      </Link>

      <RightHeaderContainer>
        <AddressesContainer>
          <MapPin size={22} color={theme?.purple} weight="fill" />
          <p>Porto Alegre, RS</p>
        </AddressesContainer>

        <Link to="/checkout">
          <CartButton>
            <ShoppingCart
              size={22}
              weight="fill"
              color={theme?.['yellow-dark']}
            />
            {coffeesOnCartQuantity ? (
              <CartQuantityCircle className="quantity-on-cart">
                {coffeesOnCartQuantity}
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
