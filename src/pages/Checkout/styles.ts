import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  height: 100vh;
  width: 100%;

  margin: 3rem auto;
  max-width: 1120px;

  display: flex;
  gap: 2rem;
  justify-content: center;
`

export const AddressAndPaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 640px;
  max-height: 592px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-size: 18px;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
  }
`

export const AddressContainer = styled.div`
  height: 100%;
  max-height: 372px;

  padding: 2.5rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`
export const PaymentOptionsContainer = styled.div`
  height: 100%;
  max-height: 207px;

  padding: 2.5rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`

export const OrderContainer = styled.div`
  width: 100%;
  max-width: 448px;

  h2 {
    margin-bottom: 14px;
    font-size: 18px;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
  }
`

export const OrderInfosContainer = styled.div`
  width: 100%;
  max-width: 448px;
  height: 100%;
  max-height: 498px;
  padding: 2.5rem;

  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['base-card']};
`
