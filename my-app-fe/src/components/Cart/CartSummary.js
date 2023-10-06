import SummaryItem from "./SummaryItem"
import { useStoreContext, formatPrice } from "../../contexts/StoreContext"
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function CartSummary() {
  const { cart } = useStoreContext()
  const { items } = cart
  const checkoutItem = items.filter(item => item.checkedout === true)
  const orderTotal = checkoutItem.reduce((total, item) => total + item.price, 0)
  const navigate = useNavigate()

  return (
    <section className="summary-wrapper">
      <div className="summary-head">
        <h4>Order Summary</h4>
        <p>{checkoutItem.length} item(s) in cart</p>
      </div>
      <form>
        <div className="order-summary">
          {
            checkoutItem && checkoutItem.map(item => (
              <SummaryItem key={item.id} item={item} />
            ))
          }
        </div>
        <div className="order-total">
          <p>
            <span>Order Total</span><span>{formatPrice(orderTotal)}</span>
          </p>
          <div className="checkout-btn">
            <Button variant="danger" disabled={checkoutItem.length === 0} onClick={() => navigate('/checkout')} >Checkout</Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default CartSummary