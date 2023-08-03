import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import {
  CoffeeCardContainer,
  CoffeeCardDetails,
  AddOrRemoveItem,
  RemoveItem,
  Divider,
  ValuesDetails,
  ConfirmOderButton,
  OrderInfosContainer,
  ConfirmContainer,
} from './styles'
import { CartContext } from '../../../../context/CartContext'
import { useContext } from 'react'

export function OrderDetails() {
  const {
    addCoffeeToCart,
    coffeesOnCart,
    reduceCoffeeFromCart,
    removeCoffeeFromCart,
  } = useContext(CartContext)

  const deliveryValue = 3.5
  const formattedDeliveryValue = formatCurrency(3.5)

  const totalItemsValue = coffeesOnCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity
  }, 0)

  const formattedTotalItemsValue = formatCurrency(totalItemsValue)

  const totalValue = formatCurrency(deliveryValue + totalItemsValue)

  const theme = useTheme()
  return (
    <OrderInfosContainer>
      {coffeesOnCart.map((coffee) => (
        <CoffeeCardContainer key={coffee.id}>
          <CoffeeCardDetails>
            <div className="coffee-box">
              <img src={`coffees/${coffee.image}`} alt="" />
              <div className="details">
                <p>{coffee.title}</p>
                <div className="actions">
                  <AddOrRemoveItem>
                    <button
                      onClick={() => reduceCoffeeFromCart(coffee.id)}
                      type="button"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus size={14} color={theme?.purple} />
                    </button>{' '}
                    {coffee.quantity}
                    <button
                      onClick={() => addCoffeeToCart(coffee)}
                      type="button"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={14} color={theme?.purple} />
                    </button>
                  </AddOrRemoveItem>
                  <RemoveItem onClick={() => removeCoffeeFromCart(coffee.id)}>
                    <Trash size={14} color={theme?.purple} /> remover
                  </RemoveItem>
                </div>
              </div>
            </div>

            <div className="price">
              <p>R$ {formatCurrency(coffee.price)}</p>
            </div>
          </CoffeeCardDetails>

          <Divider />
        </CoffeeCardContainer>
      ))}

      <ConfirmContainer>
        <ValuesDetails>
          <div>
            <p className="heading">Total de itens</p>
            <p>R$ {formattedTotalItemsValue}</p>
          </div>
          <div className="heading">
            <p>Entrega</p>
            <p>R$ {formattedDeliveryValue}</p>
          </div>
          <div>
            <h3>Total</h3>
            <h3>R$ {totalValue}</h3>
          </div>
        </ValuesDetails>

        <ConfirmOderButton type="submit">confirmar pedido</ConfirmOderButton>
      </ConfirmContainer>
    </OrderInfosContainer>
  )
}

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}
