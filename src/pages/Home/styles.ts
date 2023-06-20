import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  margin: 5rem auto;
  display: flex;

  gap: 3.5rem;
`
export const HomeContent = styled.div`
  max-width: 64%;
`

export const MainHomeText = styled.div`
  margin-bottom: 4rem;
  h1 {
    font-family: 'Baloo 2';
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
  backgroundColor: string | undefined
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

    background-color: ${(props) => props.backgroundColor};
    border-radius: 100px;
  }
`
