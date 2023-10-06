import { formatPrice } from "../../contexts/StoreContext";

function SummaryItem({ item }) {

  return (
    <>
      <div className="summary-item">
        <a href="/">
          <img src={item.product_img} alt={item.product_name} />
        </a>
        <div className="item-details">
          <p>{item.product_name}</p>
          <h6>{formatPrice(item.price * item.quantity)}</h6>
        </div>
      </div>
    </>
  );
}

export default SummaryItem;