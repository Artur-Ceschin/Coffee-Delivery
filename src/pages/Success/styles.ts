import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 80px;

  .heading {
    h2 {
      font-size: 32px;
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-dark']};
    }

    p {
      font-size: 20px;
    }
  }

  main {
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 102px;
  }
`

export const OrderReceiptContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  margin-top: 40px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #c47f17, #4b2995) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`
export const OrderSection = styled.section`
  display: flex;
  align-items: center;

  gap: 12px;

  color: ${(props) => props.theme['base-text']};

  span {
    font-weight: 700;
  }
`

export const SuccessIllustrationContainer = styled.div`
  /* background-color: orange; */
  position: relative;
  width: auto;
  height: auto;
  width: 492px;
  height: 293px;

  img {
    position: absolute;
    bottom: -18px;
  }
`

const ICON_BACKGROUND_COLOR = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
} as const

interface IconProps {
  iconbackgroundcolor: keyof typeof ICON_BACKGROUND_COLOR
}

export const Icon = styled.div<IconProps>`
  width: 32px;
  height: 32px;
  background-color: ${(props) =>
    props.theme[ICON_BACKGROUND_COLOR[props.iconbackgroundcolor]]};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  aspect-ratio: 1;
`
