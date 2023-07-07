import { ActionTypes } from './actions'

interface CoffeeType {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

export function coffeesOnCartReducer(state: CoffeeType[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return [...state, action.payload]

    case ActionTypes.REDUCE_COFFEE: {
      const updatedCoffeeCartList = [...state]
      updatedCoffeeCartList.splice(action.payload, 1)
      updatedCoffeeCartList.sort((a, b) => a.id - b.id)
      return updatedCoffeeCartList
    }

    case ActionTypes.REMOVE_COFFEE: {
      const updatedCoffeeCartList: CoffeeType[] = state.filter(
        (coffee) => coffee.id !== action.payload,
      )

      return updatedCoffeeCartList
    }

    default:
      return state
  }
}
