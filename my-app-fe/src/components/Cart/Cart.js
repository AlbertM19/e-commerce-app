import { useContext } from 'react'

import '../Cart/Cart.css'

import { StoreContext } from '../../contexts/StoreContext'
import CartList from './CartList'
import CartSummary from './CartSummary'

function Cart() {
  const { cart } = useContext(StoreContext)
  const { items } = cart

  return (
    <div className='cart-container'>
      <div className="cart-wrapper">
        <CartList items={items} />
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
