interface CoffeeType {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REDUCE_COFFEE = 'REDUCE_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_COFFEE_CART = 'CLEAR_COFFEE_CART',
}

export function addNewCoffeeToCart(currentCoffee: CoffeeType) {
  const { description, id, image, price, tags, title } = currentCoffee
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      description,
      id,
      image,
      price,
      tags,
      title,
    },
  }
}

export function removeOneCoffeeFromCart(coffeeIndex: number) {
  return {
    type: ActionTypes.REDUCE_COFFEE,
    payload: coffeeIndex,
  }
}

export function removeCoffeeFromCart(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: id,
  }
}

export function clearCoffeeCart() {
  return {
    type: ActionTypes.CLEAR_COFFEE_CART,
  }
}
