import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import {
  OrderInfosContainer,
  CoffeeCardContainer,
  CoffeeCardDetails,
  AddOrRemoveItem,
  RemoveItem,
  Divider,
  ValuesDetails,
  ConfirmOderButton,
} from './styles'

import CoffeeImage from '../../../../../public/coffees/ice-cream-express.png'
export function OrderDetails() {
  const theme = useTheme()
  return (
    <OrderInfosContainer>
      {/* <div  className="coffee"> */}
      <CoffeeCardContainer>
        <CoffeeCardDetails>
          <div className="coffee-box">
            <img src={CoffeeImage} alt="" />
            <div className="details">
              <p>Expresso Tradicional</p>
              <div className="actions">
                <AddOrRemoveItem>
                  <button type="button" aria-label="Diminuir quantidade">
                    <Minus size={14} color={theme?.purple} />
                  </button>
                  1
                  <button type="button" aria-label="Aumentar quantidade">
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
            <p>R$ 9,90</p>
          </div>
        </CoffeeCardDetails>

        <Divider />
      </CoffeeCardContainer>

      <CoffeeCardContainer>
        <CoffeeCardDetails>
          <div className="coffee-box">
            <img src={CoffeeImage} alt="" />
            <div className="details">
              <p>Expresso Tradicional</p>
              <div className="actions">
                <AddOrRemoveItem>
                  <button type="button" aria-label="Diminuir quantidade">
                    <Minus size={14} color={theme?.purple} />
                  </button>{' '}
                  1{' '}
                  <button type="button" aria-label="Aumentar quantidade">
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
            <p>R$ 9,90</p>
          </div>
        </CoffeeCardDetails>

        <Divider />
      </CoffeeCardContainer>

      <ValuesDetails>
        <div>
          <p className="heading">Total de itens</p>
          <p>R$ 29,70</p>
        </div>
        <div className="heading">
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div>
          <h3>Total</h3>
          <h3>R$ 33,20</h3>
        </div>
      </ValuesDetails>

      <ConfirmOderButton href="/success">confirmar pedido</ConfirmOderButton>
      {/* </div> */}
    </OrderInfosContainer>
  )
}
