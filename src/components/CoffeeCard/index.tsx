import { ShoppingCart } from '@phosphor-icons/react'
import americanExpress from '../../../public/coffees/coffee-cream.png'
import {
  CoffeeImage,
  CoffeeOptionContainer,
  CoffeeOptionContent,
  CoffeePrice,
} from './styles'

interface CoffeeCardProps {
  tags: string[]
  title: string
  description: string
  image: string
  price: number
}

export function CoffeeCard({
  title,
  tags,
  description,
  image,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeOptionContainer>
      <CoffeeImage>
        <img src={`coffees/${image}`} alt="" />
      </CoffeeImage>
      <CoffeeOptionContent>
        <div className="tags">
          {tags.map((tag) => (
            <div key={tag} className="tag">
              <p>{tag}</p>
            </div>
          ))}
        </div>

        <h2>{title}</h2>
        <p className="coffee-details">{description}</p>

        <CoffeePrice>
          <div className="price">
            <span>R$</span>
            <p>{price}</p>
          </div>
          <div className="quantity">
            <p>
              <button>-</button> 1 <button>+</button>
            </p>
          </div>
          <div className="shopping-cart">
            <ShoppingCart size={22} weight="fill" color="white" />
          </div>
        </CoffeePrice>
      </CoffeeOptionContent>
    </CoffeeOptionContainer>
  )
}
