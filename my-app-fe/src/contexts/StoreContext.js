import { createContext, useContext, useEffect, useState } from "react"

export const StoreContext = createContext()

export const useStoreContext = () => {
  return useContext(StoreContext)
}

export const findItem = (item, id) => {
  return item.findIndex(i => i.id === id)
}

export const formatPrice = (price) => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'PHP'
  })
}

const StoreContextProvider = (props) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? { items: [], itemQty: 0 })
  const [isChecked, setIsChecked] = useState(false)
  const [checkoutItem, setCheckoutItem] = useState([])

  const ENDPOINT = 'http://localhost:5000'

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <StoreContext.Provider value={{
      products, setProducts,
      cart, setCart,
      isChecked, setIsChecked,
      checkoutItem, setCheckoutItem,
      error, setError,
      ENDPOINT
    }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider