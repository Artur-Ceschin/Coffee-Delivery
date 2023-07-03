import {
  AddressAndPaymentContainer,
  CheckoutContainer,
  OrderContainer,
} from './styles'

import { AddressDetails } from './components/AddressDetails'
import { PaymentOptions } from './components/PaymentOptions'
import { OrderDetails } from './components/OrderDetails'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressAndPaymentContainer>
        <h2>Complete seu pedido</h2>

        <AddressDetails />
        <PaymentOptions />
      </AddressAndPaymentContainer>
      <OrderContainer>
        <h2>Cafés selecionados</h2>

        <OrderDetails />
      </OrderContainer>
    </CheckoutContainer>
  )
}
