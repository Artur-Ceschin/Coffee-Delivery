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

  a {
    background-color: ${(props) => props.theme['yellow-light']};
    border: none;
    padding: 0.5rem;
    border-radius: 6px;

    transition: filter 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
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
