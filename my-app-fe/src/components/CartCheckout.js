import { useStoreContext } from "../contexts/StoreContext"

function CartCheckout() {
  const { cart } = useStoreContext()
  const checkoutItem = cart.items.filter(item => item.checkedout === true)

  return (
    <>
      <h2>Shipping details</h2>

    </>
  )
}

export default CartCheckout;