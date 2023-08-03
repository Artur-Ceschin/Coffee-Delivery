import { ReactNode, createContext, useReducer } from 'react'
import { cartDetailsReducer } from '../reducer/cartDetails/reducer'
import {
  addCoffeeToCartAction,
  reduceCoffeeAction,
  removeCoffeeAction,
} from '../reducer/cartDetails/actions'

export interface CoffeeDetails {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

interface CartContextType {
  coffeesOnCart: CoffeeDetails[]

  addCoffeeToCart: (coffeeDetails: CoffeeDetails) => void
  reduceCoffeeFromCart: (id: number) => void
  removeCoffeeFromCart: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeesOnCart, dispatch] = useReducer(cartDetailsReducer, [])

  function addCoffeeToCart(coffeeDetails: CoffeeDetails) {
    return dispatch(addCoffeeToCartAction(coffeeDetails))
  }

  function reduceCoffeeFromCart(id: number) {
    return dispatch(reduceCoffeeAction(id))
  }

  function removeCoffeeFromCart(id: number) {
    return dispatch(removeCoffeeAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        reduceCoffeeFromCart,
        addCoffeeToCart,
        coffeesOnCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
