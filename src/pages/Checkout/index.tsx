import {
  AddressAndPaymentContainer,
  CheckoutContainer,
  AddressContainer,
  PaymentOptionsContainer,
  OrderContainer,
  OrderInfosContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressAndPaymentContainer>
        <h2>Complete seu pedido</h2>
        <AddressContainer>Delivery</AddressContainer>
        <PaymentOptionsContainer>Payments</PaymentOptionsContainer>
      </AddressAndPaymentContainer>
      <OrderContainer>
        <h2>Cafés selecionados</h2>
        <OrderInfosContainer>details</OrderInfosContainer>
      </OrderContainer>
    </CheckoutContainer>
  )
}
