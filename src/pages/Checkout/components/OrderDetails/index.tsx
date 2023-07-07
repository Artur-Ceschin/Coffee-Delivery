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
} from './styles'

import { useContext } from 'react'
import { CoffeesContext } from '../../../../context/CoffeesContext'

interface CoffeeType {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}
export function OrderDetails() {
  const {
    coffeesOnCart,
    decreaseCoffeeQuantity,
    increaseCoffeeQuantity,
    deleteCoffeeFromCart,
  } = useContext(CoffeesContext)

  const sumCoffeesPrice = calculateSumCoffeesPrice(coffeesOnCart)
  const deliveryValue = formatCurrency(3.5)
  const totalPrice = calculateTotalPrice(sumCoffeesPrice, deliveryValue)

  const uniqueCoffees = Array.from(
    new Set(coffeesOnCart.map((item) => item.id)),
  ).map(
    (id) => coffeesOnCart.find((item) => item.id === id) || ({} as CoffeeType),
  )

  const theme = useTheme()
  return (
    <OrderInfosContainer>
      {uniqueCoffees.map((coffee) => (
        <CoffeeCardContainer key={coffee.id}>
          <CoffeeCardDetails>
            <div className="coffee-box">
              <img src={`coffees/${coffee.image}`} alt="" />
              <div className="details">
                <p>{coffee.title}</p>
                <div className="actions">
                  <AddOrRemoveItem>
                    <button
                      onClick={() => decreaseCoffeeQuantity(coffee.id)}
                      type="button"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus size={14} color={theme?.purple} />
                    </button>{' '}
                    {getCoffeeQuantity(coffeesOnCart, coffee.id)}
                    <button
                      onClick={() => increaseCoffeeQuantity(coffee)}
                      type="button"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={14} color={theme?.purple} />
                    </button>
                  </AddOrRemoveItem>
                  <RemoveItem onClick={() => deleteCoffeeFromCart(coffee.id)}>
                    <Trash size={14} color={theme?.purple} /> remover
                  </RemoveItem>
                </div>
              </div>
            </div>

            <div className="price">
              <p>
                R${' '}
                {coffee.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </CoffeeCardDetails>

          <Divider />
        </CoffeeCardContainer>
      ))}

      <ValuesDetails>
        <div>
          <p className="heading">Total de itens</p>
          <p>R$ {sumCoffeesPrice}</p>
        </div>
        <div className="heading">
          <p>Entrega</p>
          <p>R$ {deliveryValue}</p>
        </div>
        <div>
          <h3>Total</h3>
          <h3>R$ {totalPrice}</h3>
        </div>
      </ValuesDetails>

      <ConfirmOderButton href="/success">confirmar pedido</ConfirmOderButton>
    </OrderInfosContainer>
  )
}

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}

function calculateSumCoffeesPrice(coffees: CoffeeType[]) {
  const sumOfCoffeesPrice = coffees.reduce(
    (accumulator, coffee) => accumulator + coffee.price,
    0,
  )
  return formatCurrency(sumOfCoffeesPrice)
}

function calculateTotalPrice(sumCoffeesPrice: string, deliveryValue: string) {
  const totalPrice = parseFloat(sumCoffeesPrice) + parseFloat(deliveryValue)
  return formatCurrency(totalPrice)
}

function getCoffeeQuantity(coffees: CoffeeType[], coffeeId: number) {
  const filteredCoffees = coffees.filter((coffee) => coffee.id === coffeeId)
  return filteredCoffees.length
}
