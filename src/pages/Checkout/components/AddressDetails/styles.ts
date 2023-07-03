import styled from 'styled-components'

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

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FlexAddressForm = styled.div`
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
