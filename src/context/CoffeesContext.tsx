import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface CoffeeType {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
}

interface CoffeesContextType {
  selectedCoffees: CoffeeType[]
  setSelectedCoffees: Dispatch<SetStateAction<CoffeeType[]>>
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeType[]>([])

  return (
    <CoffeesContext.Provider value={{ selectedCoffees, setSelectedCoffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
