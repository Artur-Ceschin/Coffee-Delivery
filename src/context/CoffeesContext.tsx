import { ReactNode, createContext, useReducer } from 'react'
import { coffeesOnCartReducer } from '../reducers/coffees/reducer'
import {
  addNewCoffeeToCart,
  removeCoffeeFromCart,
  removeOneCoffeeFromCart,
} from '../reducers/coffees/actions'

interface CoffeeType {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

interface CoffeesContextType {
  coffeesOnCart: CoffeeType[]

  increaseCoffeeQuantity: (coffeesData: CoffeeType) => void
  decreaseCoffeeQuantity: (id: number) => void
  deleteCoffeeFromCart: (id: number) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesOnCart, dispatch] = useReducer(coffeesOnCartReducer, [])

  function increaseCoffeeQuantity(currentCoffee: CoffeeType) {
    dispatch(addNewCoffeeToCart(currentCoffee))
  }

  function decreaseCoffeeQuantity(id: number) {
    const coffeeIndex = coffeesOnCart.findIndex((coffee) => coffee.id === id)

    if (coffeeIndex !== -1) {
      dispatch(removeOneCoffeeFromCart(coffeeIndex))
    }
  }

  function deleteCoffeeFromCart(id: number) {
    dispatch(removeCoffeeFromCart(id))
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesOnCart,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        deleteCoffeeFromCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
