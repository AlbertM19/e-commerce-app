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

  const { image_1, image_2, image_3, image_4} = product[0];
  const [newImage, setNewImage] = useState(image_1);
  const changeImage1 = () => {
    setNewImage(image_1);
  }
  const changeImage2 = () => {
    setNewImage(image_2);
  }
  const changeImage3 = () => {
    setNewImage(image_3);
  }
  const changeImage4 = () => {
    setNewImage(image_4);
  }
  
  return (
    <>
      <Container className='product-details-container'>
        <aside>
          <div className="main-image">
            <Image src={newImage} alt="" />
          </div>
          <div className="thumbnail-image">
            <Image className="thumnail_1" src={image_1} alt="" onClick={changeImage1} />
            <Image className="thumnail_2" src={image_2} alt="" onClick={changeImage2} />
            <Image className="thumnail_3" src={image_3} alt="" onClick={changeImage3} />
            <Image className="thumnail_4" src={image_4} alt="" onClick={changeImage4} />
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
        </aside>
      </Container>
    </>
  );
}

export default ProductDetails;
