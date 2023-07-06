import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useReducer,
  useState,
} from 'react'

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

  increaseCoffeeQuantity: (id: number) => void
  decreaseCoffeeQuantity: (id: number) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REDUCE_COFFEE = 'REDUCE_COFFEE',
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesOnCart, dispatch] = useReducer(
    (state: CoffeeType[], action: any) => {
      switch (action.type) {
        case ActionTypes.ADD_COFFEE: {
          console.log('action.state', state)
          const updatedCoffeeCartList = state.map((cartCoffee) => {
            console.log('action.payload', action.payload.id)
            if (cartCoffee.id === action.payload.id) {
              return { ...cartCoffee, quantity: cartCoffee.quantity + 1 }
            }
            return cartCoffee
          })

          return updatedCoffeeCartList
        }
        case ActionTypes.REDUCE_COFFEE: {
          const updatedCoffeeCartList = [...state]
          updatedCoffeeCartList.splice(action.payload, 1)
          return updatedCoffeeCartList
        }

        default:
          return state
      }
    },
    [],
  )

  console.log('coffeesOnCart', coffeesOnCart)

  function increaseCoffeeQuantity(id: number) {
    // const { description, id, image, price, tags, title } = currentCoffee
    dispatch({
      type: 'ADD_COFFEE',
      payload: {
        id,
      },
    })
  }

  function decreaseCoffeeQuantity(id: number) {
    const coffeeIndex = coffeesOnCart.findIndex((coffee) => coffee.id === id)

    if (coffeeIndex !== -1) {
      dispatch({
        type: 'REDUCE_COFFEE',
        payload: {
          coffeeIndex,
        },
      })
      // const updateCoffees = [...selectedCoffees]
      // updateCoffees.splice(coffeeIndex, 1)
      // setSelectedCoffees(updateCoffees)
    }
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesOnCart,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
