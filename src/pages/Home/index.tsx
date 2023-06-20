import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  FeatureItem,
  FeaturesSection,
  HomeContainer,
  HomeContent,
  MainHomeText,
} from './styles'
import CoffeeMainImage from '../../assets/coffee-main-image.png'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()
  return (
    <HomeContainer>
      <HomeContent>
        <MainHomeText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </MainHomeText>

        <FeaturesSection>
          <FeatureItem backgroundColor={theme?.['yellow-dark']}>
            <div>
              <ShoppingCart weight="fill" color="white" />
            </div>
            <p>Compra simples e segura</p>
          </FeatureItem>

          <FeatureItem backgroundColor={theme?.['base-text']}>
            <div>
              <Package weight="fill" color="white" />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </FeatureItem>
          <FeatureItem backgroundColor={theme?.yellow}>
            <div>
              <Timer weight="fill" color="white" />
            </div>
            <p>Entrega rápida e rastreada</p>
          </FeatureItem>
          <FeatureItem backgroundColor={theme?.purple}>
            <div>
              <Coffee weight="fill" color="white" />
            </div>
            <p>O café chega fresquinho até você</p>
          </FeatureItem>
        </FeaturesSection>
      </HomeContent>

      <div>
        <img src={CoffeeMainImage} alt="" />
      </div>
    </HomeContainer>
  )
}
