import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

import {
  CoffeeImage,
  CoffeeOptionContainer,
  CoffeeOptionContent,
  CoffeePrice,
} from './styles'

import { Link } from 'react-router-dom'

import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../context/CartContext'

export interface CoffeeDetails {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

interface CoffeeCardProps {
  coffeeDetails: CoffeeDetails
}

export function CoffeeCard({ coffeeDetails }: CoffeeCardProps) {
  const { description, image, price, tags, title, id } = coffeeDetails

  const [quantity, setQuantity] = useState(0)

  const { addCoffeeToCart, coffeesOnCart, reduceCoffeeFromCart } =
    useContext(CartContext)

  useEffect(() => {
    const currentCoffee = coffeesOnCart.find((coffee) => coffee.id === id)

    setQuantity(currentCoffee ? currentCoffee.quantity : 0)
  }, [id, coffeesOnCart])

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
              onClick={() => reduceCoffeeFromCart(id)}
              type="button"
              aria-label="Diminuir quantidade"
            >
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => addCoffeeToCart(coffeeDetails)}
              type="button"
              aria-label="Aumentar quantidade"
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
