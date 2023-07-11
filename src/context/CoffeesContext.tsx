import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { coffeesOnCartReducer } from '../reducers/coffees/reducer'
import {
  addNewCoffeeToCart,
  clearCoffeeCart,
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

interface AddressType {
  id: string
  number: number
  cep: string
  street: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'creditCard' | 'debitCart' | 'cash'
  additional?: string | undefined
}

interface CompleteOrder {
  coffees: CoffeeType[]
  deliveryAddress: AddressType
}

interface CoffeesContextType {
  coffeesOnCart: CoffeeType[]
  completeOrder: CompleteOrder | undefined

  increaseCoffeeQuantity: (coffeesData: CoffeeType) => void
  decreaseCoffeeQuantity: (id: number) => void
  deleteCoffeeFromCart: (id: number) => void
  createCoffeeOrder: (addressData: AddressType) => void
  emptyCart: () => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesOnCart, dispatch] = useReducer(
    coffeesOnCartReducer,
    {
      coffeesOnCart: [],
    },
    (initialState) => {
      const storedStateJSON = localStorage.getItem(
        '@coffee-delivery:coffees-on=-cart-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return initialState
    },
  )
  const [completeOrder, setCompleteOrder] = useState<CompleteOrder>()

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

  function emptyCart() {
    dispatch(clearCoffeeCart())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesOnCart)

    localStorage.setItem('@coffee-delivery:coffees-on=-cart-1.0.0', stateJSON)
  }, [coffeesOnCart])

  function createCoffeeOrder(addressData: AddressType) {
    setCompleteOrder({
      coffees: coffeesOnCart,
      deliveryAddress: addressData,
    })
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesOnCart,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        deleteCoffeeFromCart,
        createCoffeeOrder,
        emptyCart,
        completeOrder,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
