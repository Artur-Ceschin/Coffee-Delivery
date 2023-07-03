import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react'
import {
  AddressAndPaymentContainer,
  CheckoutContainer,
  AddressContainer,
  PaymentOptionsContainer,
  OrderContainer,
  OrderInfosContainer,
  DeliveryFormContainer,
  CEPInput,
  BaseInput,
  FlexAddressContainer,
  HeadingTitle,
  PaymentMethodsContainer,
  PaymentMethodButton,
  AddOrRemoveItem,
  RemoveItem,
  CoffeeCardDetails,
  Divider,
  CoffeeCardContainer,
  ValuesDetails,
  ConfirmOderButton,
} from './styles'
import { useTheme } from 'styled-components'

import CoffeeImage from '../../../public/coffees/american-express.png'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Checkout() {
  const theme = useTheme()
  return (
    <CheckoutContainer>
      <AddressAndPaymentContainer>
        <h2>Complete seu pedido</h2>

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

          <DeliveryFormContainer>
            <div>
              <CEPInput width={200} type="text" placeholder="CEP" />
            </div>
            <div>
              <BaseInput type="text" placeholder="Rua" />
            </div>
            <FlexAddressContainer>
              <BaseInput placeholder="Número" width={200} />
              <BaseInput placeholder="Complemento" />
            </FlexAddressContainer>
            <FlexAddressContainer>
              <BaseInput placeholder="Bairro" width={200} />
              <BaseInput placeholder="Cidade" />
              <BaseInput placeholder="UF" width={60} />
            </FlexAddressContainer>
          </DeliveryFormContainer>
        </AddressContainer>
        <PaymentOptionsContainer>
          <HeadingTitle className="heading">
            <CurrencyDollar size={22} color={theme?.purple} />
            <div>
              <h3>Pagamento</h3>
              <p className="subtitle">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeadingTitle>

          <PaymentMethodsContainer>
            <PaymentMethodButton>
              <CreditCard color={theme?.purple} />
              <p>Cartão de crédito</p>
            </PaymentMethodButton>

            <PaymentMethodButton>
              <Bank color={theme?.purple} />
              <p>Cartão de débito</p>
            </PaymentMethodButton>

            <PaymentMethodButton>
              <Money color={theme?.purple} />
              <p>Dinheiro</p>
            </PaymentMethodButton>
          </PaymentMethodsContainer>
        </PaymentOptionsContainer>
      </AddressAndPaymentContainer>
      <OrderContainer>
        <h2>Cafés selecionados</h2>
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
                      <button>
                        <Minus size={14} color={theme?.purple} />
                      </button>{' '}
                      1{' '}
                      <button>
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
                      <button>
                        <Minus size={14} color={theme?.purple} />
                      </button>{' '}
                      1{' '}
                      <button>
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

          <ConfirmOderButton>confirmar pedido</ConfirmOderButton>
          {/* </div> */}
        </OrderInfosContainer>
      </OrderContainer>
    </CheckoutContainer>
  )
}
