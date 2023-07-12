import { produce } from 'immer'
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
      return produce(state, (draft) => {
        draft.push(action.payload)
      })

    case ActionTypes.REDUCE_COFFEE: {
      return produce(state, (draft) => {
        draft.splice(action.payload, 1)
        draft.sort((a, b) => a.id - b.id)
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        draft = draft.filter((draft) => draft.id !== action.payload)
        return draft
      })
    }

    case ActionTypes.CLEAR_COFFEE_CART:
      return []

    default:
      return state
  }
}
