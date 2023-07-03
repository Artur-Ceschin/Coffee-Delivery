import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  margin: 5rem auto;
`

export const CoffeeOptionsContainer = styled.div`
  margin-top: 2rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }
`

export const OurCoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 20px;
`
