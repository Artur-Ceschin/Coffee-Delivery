import { produce } from 'immer'
import { CoffeeDetails } from '../../context/CartContext'
import { ActionTypes } from './actions'

interface PayloadTypes {
  id?: number
  coffeeDetails?: CoffeeDetails
}

interface Action {
  type: ActionTypes
  payload: PayloadTypes
}

export function cartDetailsReducer(state: CoffeeDetails[], action: Action) {
  const { payload } = action
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return produce(state, (draft) => {
        const { coffeeDetails } = payload
        if (!coffeeDetails) {
          return state
        }

        const currentCoffeeIndex = state.findIndex(
          (coffee) => coffee.id === coffeeDetails.id,
        )

        if (currentCoffeeIndex >= 0) {
          draft[currentCoffeeIndex].quantity += 1
        } else {
          draft.push({ ...coffeeDetails, quantity: 1 })
        }
      })

    case ActionTypes.REDUCE_COFFEE:
      return produce(state, (draft) => {
        const { id } = payload

        if (!id) {
          return state
        }

        const currentCoffeeIndex = state.findIndex((coffee) => coffee.id === id)

        if (currentCoffeeIndex >= 0) {
          draft[currentCoffeeIndex].quantity -= 1

          if (draft[currentCoffeeIndex].quantity <= 0) {
            draft.splice(currentCoffeeIndex, 1)
          }
        }
      })

    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const { id } = payload

        if (!id) {
          return state
        }
        const currentCoffeeIndex = state.findIndex((coffee) => coffee.id === id)

        if (currentCoffeeIndex >= 0) {
          draft.splice(currentCoffeeIndex, 1)
        }
      })

    default:
      return state
  }
}
