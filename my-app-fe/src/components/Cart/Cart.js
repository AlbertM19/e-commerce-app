import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';

import '../Cart/Cart.css';
import CartItem from './CartItem';
import UserContext from '../../UserContext';

function Cart() {
  const {cartItems} = useContext(UserContext);

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
          {cartItems && (cartItems.map((cartItem) => (
            <CartItem 
              product_img={cartItem.product_img} 
              name={cartItem.product_name} 
              quantity={cartItem.quantity}
              price={cartItem.price}
            />
          )))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
