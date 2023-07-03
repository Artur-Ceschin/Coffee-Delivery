import styled from 'styled-components'

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

  display: flex;
  flex-direction: column;

  gap: 2rem;
`

export const DeliveryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FlexAddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

interface InputProps {
  width?: number
}

export const BaseInput = styled.input<InputProps>`
  background-color: ${(props) => props.theme['base-input']};
  border: none;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  max-width: ${(props) => props.width}px;

  border: 1px solid ${(props) => props.theme['base-button']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
  &:focus {
    box-shadow: none;
    outline: none;
  }
`

export const CEPInput = styled(BaseInput)`
  flex: 1;
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

export const HeadingTitle = styled.div`
  display: flex;
  gap: 8px;

  h3 {
    font-size: 16px;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  .subtitle {
    color: ${(props) => props.theme['base-text']};
    font-size: 14px;
    line-height: 130%;
  }
`

export const OrderInfosContainer = styled.div`
  width: 100%;
  max-width: 448px;

  min-height: 498px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['base-card']};
`
export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 368px;

  &:nth-child(n + 2) {
    margin-top: 24px;
  }
`

export const Divider = styled.hr`
  align-self: stretch;
  border: 1px solid ${(props) => props.theme['base-button']};
  width: 100%;

  margin-top: 24px;
`

export const CoffeeCardDetails = styled.div`
  width: 100%;
  max-width: 368px;
  height: auto;
  max-height: 80px;

  display: flex;
  justify-content: space-between;
  gap: 20px;

  padding: 8px 4px;

  .coffee-box {
    display: flex;
    /* justify-content: space-between; */
    gap: 20px;
    img {
      width: 64px;
      height: 64px;
    }

    .details {
      p {
        color: ${(props) => props.theme['base-subtitle']};
      }

      .actions {
        display: flex;

        justify-content: center;
        margin-top: 8px;

        gap: 4px;
      }
    }
  }
  .price {
    p {
      font-size: 16px;
      font-weight: 700;
    }
  }
`

export const BaseButtonAction = styled.button`
  border-radius: 6px;
  height: 32px;
  padding: 8px;
  background-color: ${(props) => props.theme['base-button']};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-transform: uppercase;
  font-size: 12px;
  color: ${(props) => props.theme['base-text']};
`

export const AddOrRemoveItem = styled.div`
  border-radius: 6px;
  height: 32px;
  padding: 8px;
  background-color: ${(props) => props.theme['base-button']};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  button {
    background: none;
    display: flex;
    align-items: center;
  }
`
export const RemoveItem = styled(BaseButtonAction)``

export const ValuesDetails = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;

    .heading {
      font-size: 14px;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
    }
  }
`

export const ConfirmOderButton = styled.button`
  width: 100%;
  padding: 12px 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};

  margin-top: 24px;

  text-align: center;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;

  font-size: 14px;
  font-weight: 700;
`

export const PaymentMethodsContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
`

export const PaymentMethodButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${(props) => props.theme['base-button']};

  border-radius: 6px;
  padding: 16px;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:active {
    background-color: ${(props) => props.theme['purple-light']};
  }

  p {
    font-size: 12px;
    text-transform: uppercase;
  }
`
