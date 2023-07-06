import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

import {
  CoffeeImage,
  CoffeeOptionContainer,
  CoffeeOptionContent,
  CoffeePrice,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../context/CoffeesContext'
import { Link } from 'react-router-dom'

interface CoffeeCardProps {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

export function CoffeeCard({
  id,
  title,
  tags,
  description,
  image,
  price,
  quantity,
}: CoffeeCardProps) {
  const { coffeesOnCart, decreaseCoffeeQuantity, increaseCoffeeQuantity } =
    useContext(CoffeesContext)

  const currentCoffeeData = {
    id,
    title,
    tags,
    description,
    image,
    price,
    quantity,
  }

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
            <button
              type="button"
              aria-label="Diminuir quantidade"
              onClick={() => decreaseCoffeeQuantity(id)}
            >
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() => increaseCoffeeQuantity(id)}
            >
              <Plus size={14} />
            </button>
          </div>
          <Link to="/checkout" className="shopping-cart">
            <ShoppingCart size={22} weight="fill" color="white" />
          </Link>
        </CoffeePrice>
      </CoffeeOptionContent>
    </CoffeeOptionContainer>
  )
}
