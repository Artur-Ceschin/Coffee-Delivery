import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
`

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
`

export const AddressesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.6rem 0.8rem;
  border-radius: 6px;

  p {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartButton = styled.button`
  position: relative;

  background-color: ${(props) => props.theme['yellow-light']};
  border: none;
  padding: 0.5rem;
  border-radius: 6px;

  transition: filter 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`

export const CartQuantityCircle = styled.div`
  position: absolute;
  top: -6px;
  right: -10px;

  width: 20px;
  height: 20px;

  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;

  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`
