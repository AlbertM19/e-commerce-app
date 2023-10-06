import CartItem from './CartItem'

function CartList({ items }) {
  return (
    <section className="item-wrapper">
      <p className="item-head">
        <span>ITEM</span>
        <span>QTY</span>
        <span>SUBTOTAL</span>
        <span></span>
      </p>
      <div className="item-list">
        {
          items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        }
      </div>
    </section>
  )
}

export default CartList;