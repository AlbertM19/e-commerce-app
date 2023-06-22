import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Image, InputGroup, Form } from 'react-bootstrap';

import '../ProductDetails/ProductDetails.css';
import { productList } from '../Helper/ProductList';

function ProductDetails() {
  const { id } = useParams();
  const [products] = useState([...productList()]);
  const [quantity, setQuantity] = useState(1);
  const product = products.filter((product) => product.id === +id);
  const handleMinus = () => {
    setQuantity(quantity - 1);
  }
  const handleAdd = () => {
    setQuantity(quantity + 1);
  }
  
  return (
    <>
      <Container>
        <aside>
          <div className="main-image">
            <Image src={product[0].image_1} alt="" />
          </div>
          <div className="thumbnail-image">
            <Image className="thumnail_1" src={product[0].image_1} alt="" />
            <Image className="thumnail_2" src={product[0].image_2} alt="" />
            <Image className="thumnail_3" src={product[0].image_3} alt="" />
            <Image className="thumnail_4" src={product[0].image_4} alt="" />
          </div>
        </aside>
        <aside>
          <h1>{product[0].product_name}</h1>
          <p>{product[0].descriptions}</p>
          <h5>{product[0].price}</h5>
          <div>
            <Form>
              <InputGroup>
                {quantity <= 1 
                  ? <Button disabled onClick={handleMinus}>-</Button>
                  : <Button onClick={handleMinus}>-</Button>}
                <Form.Control type="number"
                 value={quantity}
                 min={1}
                 onChange={(e) => setQuantity(e.target.value)}
                 onWheel={(e) => e.preventDefault()}
                />
                <Button onClick={handleAdd}>+</Button>
              </InputGroup>
              <Button>Add to Cart</Button>
            </Form>
          </div>
          <p>{quantity}</p>
        </aside>
      </Container>
    </>
  );
}

export default ProductDetails;
