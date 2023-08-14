import React, {useState, useEffect} from 'react';

import Home from './components/Home/Home';

import UserContext from './UserContext';
import { productList } from './components/Helper/ProductList';

function App() {
  const [products] = useState([...productList()]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
  let quantity = 0;

  for (let i = 0; i < cart.length; i++) {
    quantity += cart[i].quantity;
  }

  useEffect(() => {
    setCartCount(quantity);
    
    return;
  },[setCartCount, quantity])

  console.log(cartCount);

  const addToCart = (item) => {
    const existingItem = cart;
    return localStorage.setItem('cart', JSON.stringify([...existingItem, item]))
  }

  return (
    <UserContext.Provider value={{products, cartCount, setCartCount, cartItems, setCartItems, addToCart}}>
      <Home cartCount={cartCount} />
    </UserContext.Provider>
  );
}

export default App;
