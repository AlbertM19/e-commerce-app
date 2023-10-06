import { useStoreContext } from '../contexts/StoreContext'

function Checkout() {
  const { cart } = useStoreContext()
  const checkoutItem = cart.items.filter(item => item.checkedout === true)
  console.log(checkoutItem)
  return (
    <p>Checkout</p>
  )
}

export default Checkout