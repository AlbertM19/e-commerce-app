import { Container, Image, Table } from 'react-bootstrap';
import { useState } from 'react';

import '../Cart/Cart.css';
import { productList } from '../Helper/ProductList';


function Cart() {
  const [products] = useState([...productList()]);

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
          <tr>
            <td>
              <Image src={products[0].image_1} />
              <p>{products[0].product_name}</p>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* <tr>
            <td>
              <Image src={products[1].image_1} />
              <p>{products[1].product_name}</p>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
