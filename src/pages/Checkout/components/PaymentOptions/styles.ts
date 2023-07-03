import styled from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  height: 100%;
  max-height: 207px;

  padding: 2.5rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
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
