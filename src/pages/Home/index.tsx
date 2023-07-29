import {
  CoffeeOptionsContainer,
  HomeContainer,
  OurCoffeesContainer,
} from './styles'

import { CoffeeCard } from './components/CoffeeCard'
import { coffees } from '../../mock/coffee'
import { Hero } from './components/Hero'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CoffeeOptionsContainer>
        <h1>Nossos cafés</h1>
        <OurCoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard coffeeDetails={coffee} key={coffee.id} />
          ))}
        </OurCoffeesContainer>
      </CoffeeOptionsContainer>
    </HomeContainer>
  )
}
