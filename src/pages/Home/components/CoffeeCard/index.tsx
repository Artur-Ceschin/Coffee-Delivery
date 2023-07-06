import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

import {
  CoffeeImage,
  CoffeeOptionContainer,
  CoffeeOptionContent,
  CoffeePrice,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../context/CoffeesContext'

interface CoffeeCardProps {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
}

export function CoffeeCard({
  id,
  title,
  tags,
  description,
  image,
  price,
}: CoffeeCardProps) {
  const { selectedCoffees, setSelectedCoffees } = useContext(CoffeesContext)

  function increaseCoffeeQuantity() {
    const coffeeValues = { id, title, tags, description, image, price }
    setSelectedCoffees((state) => [...state, coffeeValues])
  }

  function decreaseCoffeeQuantity(id: number) {
    const coffeeIndex = selectedCoffees.findIndex((coffee) => coffee.id === id)
    if (coffeeIndex !== -1) {
      const updateCoffees = [...selectedCoffees]
      updateCoffees.splice(coffeeIndex, 1)
      setSelectedCoffees(updateCoffees)
    }
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
            <span>
              {selectedCoffees.filter((coffee) => coffee.id === id).length}
            </span>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={increaseCoffeeQuantity}
            >
              <Plus size={14} />
            </button>
          </div>
          <div className="shopping-cart">
            <ShoppingCart size={22} weight="fill" color="white" />
          </div>
        </CoffeePrice>
      </CoffeeOptionContent>
    </CoffeeOptionContainer>
  )
}
