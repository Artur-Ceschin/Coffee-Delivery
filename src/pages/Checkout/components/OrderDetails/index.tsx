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
export function OrderDetails() {
  const { coffeesOnCart, decreaseCoffeeQuantity, increaseCoffeeQuantity } =
    useContext(CoffeesContext)

  const sumCoffeesPrice = coffeesOnCart
    .reduce((accumulator, coffee) => {
      return accumulator + coffee.price
    }, 0)
    .toLocaleString('pt-BR', { minimumFractionDigits: 2 })

  const deliveryValue = (3.5).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  function sumTotalValue() {
    const convertedCoffeesPrice = sumCoffeesPrice.replace(',', '.')
    const convertedDeliveryValue = deliveryValue.replace(',', '.')

    const totalSumValue = (
      parseFloat(convertedCoffeesPrice) + parseFloat(convertedDeliveryValue)
    ).toLocaleString('pt-BR', { minimumFractionDigits: 2 })

    console.log('totalSumValue', totalSumValue)

    return totalSumValue
  }

  const totalPrice = sumTotalValue()

  const uniqueCoffees = coffeesOnCart.filter((item, index, array) => {
    return array.findIndex((el) => el.id === item.id) === index
  })

  console.log(uniqueCoffees)

  const theme = useTheme()
  return (
    <OrderInfosContainer>
      {uniqueCoffees.map((coffee, index) => (
        <CoffeeCardContainer key={coffee.id + index}>
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
                    {
                      coffeesOnCart.filter(
                        (cartsCoffee) => cartsCoffee.id === coffee.id,
                      ).length
                    }
                    <button
                      onClick={() => increaseCoffeeQuantity(coffee.id)}
                      type="button"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={14} color={theme?.purple} />
                    </button>
                  </AddOrRemoveItem>
                  <RemoveItem>
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
      {/* </div> */}
    </OrderInfosContainer>
  )
}
