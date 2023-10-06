import { TrashIcon } from '@heroicons/react/24/outline'

import { findItem, useStoreContext, formatPrice } from '../../contexts/StoreContext'

function CartItem({ item }) {
  const { cart, setCart } = useStoreContext()
  const { items, itemQty } = cart

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target
    const itemIndex = findItem(items, id)
    items[itemIndex].checkedout = checked

    setCart({
      items: [...items],
      itemQty: itemQty
    })
  }

  return (
    <div className="item">
      <label>
        <input
          type="checkbox"
          id={item.id}
          checked={item.checkedout}
          onChange={handleCheckboxChange}
        />
        <a href={`product-details/${item.id}`} alt={item.product_name}>
          <img src={item.product_img} alt={item.product_name} />
          <p>{item.product_name}</p>
        </a>
        <div className="qty">
          <p>{item.quantity}</p>
        </div>
        <div className="subtotal">
          <p>{formatPrice(item.quantity * item.price)}</p>
        </div>
        <div className="delete-item">
          <TrashIcon id={item.id} />
        </div>
      </label>
    </div>
  )
}

export default CartItem;