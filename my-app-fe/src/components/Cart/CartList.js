import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';

import '../Cart/Cart.css';
import CartItem from './CartItem';
import { StoreContext } from '../../contexts/StoreContext';

function Cart() {
  const { cart } = useContext(StoreContext)

  return (
    <Container className='cart-container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart && (cart.items.map((item) => (
            <CartItem
              key={item.id}
              product_img={item.product_img}
              name={item.product_name}
              quantity={item.quantity}
              price={item.price}
            />
          )))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
