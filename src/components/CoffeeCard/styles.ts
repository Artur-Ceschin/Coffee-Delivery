import { styled } from 'styled-components'

export const CoffeeOptionContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  width: 256px;
  height: 310px;
  border-radius: 6px 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: 0 20px;
`
export const CoffeeImage = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;

  left: calc(50% - 120px / 2);
  top: -20px;
`

export const CoffeeOptionContent = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tags {
    display: flex;
    gap: 4px;

    div {
      color: ${(props) => props.theme['yellow-dark']};
      padding: 4px 8px;
      background-color: ${(props) => props.theme['yellow-light']};
      max-width: 81px;

      border-radius: 100px;

      p {
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    margin: 1rem;
  }

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 8px;
  }

  .coffee-details {
    font-size: 14px;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
    line-height: 12px;
  }
`

export const CoffeePrice = styled.div`
  align-content: end;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 210px;
  width: 100%;
  /* background-color: orange; */

  .price {
    display: flex;
    align-items: center;
    gap: 2px;
    span {
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
    }
    p {
      font-family: 'Baloo 2', cursive;
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  .quantity {
    background-color: ${(props) => props.theme['base-button']};
    width: 100%;
    max-width: 72px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    button {
      background-color: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme.purple};
      font-size: 14px;
    }
  }

  .shopping-cart {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 8px;
  }
`