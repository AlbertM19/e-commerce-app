import React from 'react';
import { Image } from 'react-bootstrap';

function CartItem({ product_img, name, quantity, price }) {
  return (
    <>
      <tr>
        <td>
          <Image src={product_img} />
          <p>{name}</p>
        </td>
        <td>{quantity}</td>
        <td>{`PHP. ${price}`}</td>
        <td>{`PHP. ${quantity * price}`}</td>
      </tr>
    </>
  )
}

export default CartItem;