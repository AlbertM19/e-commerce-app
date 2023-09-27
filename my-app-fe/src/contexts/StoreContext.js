import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [products, setProducts] = useState([])
  const [unit, setUnit] = useState(0)
  const [error, setError] = useState(null)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? { items: [], itemQty: 0 })

  const ENDPOINT = 'http://localhost:5000'

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <StoreContext.Provider value={{ products, setProducts, cart, setCart, error, setError, ENDPOINT }}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;