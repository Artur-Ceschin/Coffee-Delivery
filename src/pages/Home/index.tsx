import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  CoffeeOptionsContainer,
  FeatureItem,
  FeaturesSection,
  HomeContainer,
  HomeContent,
  HomeContentLayout,
  MainHomeText,
  OurCoffeesContainer,
} from './styles'
import CoffeeMainImage from '../../assets/coffee-main-image.png'
import { useTheme } from 'styled-components'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../mock/coffee'

export function Home() {
  const theme = useTheme()
  return (
    <HomeContainer>
      <HomeContentLayout>
        <HomeContent>
          <MainHomeText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </MainHomeText>

          <FeaturesSection>
            <FeatureItem backgroundcolor={theme?.['yellow-dark']}>
              <div>
                <ShoppingCart weight="fill" color="white" />
              </div>
              <p>Compra simples e segura</p>
            </FeatureItem>

            <FeatureItem backgroundcolor={theme?.['base-text']}>
              <div>
                <Package weight="fill" color="white" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </FeatureItem>
            <FeatureItem backgroundcolor={theme?.yellow}>
              <div>
                <Timer weight="fill" color="white" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </FeatureItem>
            <FeatureItem backgroundcolor={theme?.purple}>
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
      </HomeContentLayout>

      <CoffeeOptionsContainer>
        <h1>Nossos cafés</h1>
        <OurCoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard
              title={coffee.title}
              image={coffee.image}
              description={coffee.description}
              price={coffee.price}
              tags={coffee.tags}
              key={coffee.id}
            />
          ))}
        </OurCoffeesContainer>
      </CoffeeOptionsContainer>
    </HomeContainer>
  )
}
