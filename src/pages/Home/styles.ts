import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  margin: 5rem auto;
`

export const HomeContentLayout = styled.div`
  display: flex;

  gap: 3.5rem;

  margin-bottom: 7.5rem;
`
export const HomeContent = styled.div`
  max-width: 580px;
`

export const MainHomeText = styled.div`
  margin-bottom: 4rem;
  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    font-size: 48px;
  }

  p {
    font-size: 20px;
    line-height: 26px;
    margin-top: 1rem;
  }
`

export const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`

interface FeatureItemProps {
  backgroundcolor: string | undefined
}

export const FeatureItem = styled.div<FeatureItemProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  div {
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.backgroundcolor};
    border-radius: 100px;
  }
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
