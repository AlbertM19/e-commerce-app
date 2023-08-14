import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Image, InputGroup, Form } from 'react-bootstrap';

import './ProductDetails.css';
import UserContext from '../UserContext';
import { productList } from '../components/Helper/ProductList';

function ProductDetails() {
  const { id } = useParams();
  const [products] = useState([...productList()]);
  const [quantity, setQuantity] = useState(1);
  const product = products.filter((product) => product.id === +id);
  const { image_1, image_2, image_3, image_4, product_name, descriptions, price, price_int } = product[0];
  const item = {'id': id, 'product_name': product_name, 'quantity': quantity, 'price': price_int, 'product_img': image_1};

  const {cartItems, setCartItems, addToCart} = useContext(UserContext);

  const handleMinus = () => {
    setQuantity(quantity - 1);
  }
  const handleAdd = () => {
    setQuantity(quantity + 1);
  }

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

  // const addToCart = () => {
  //   const item = {'id': id, 'product_name': product_name, 'quantity': quantity, 'price': price_int, 'product_img': image_1};
  //   const existingItem = JSON.parse(localStorage.getItem('cart')) ?? [];
  //   setCartCount(cartCount + quantity);
    
  //   return localStorage.setItem('cart', JSON.stringify([...existingItem, item]));
  // }

  return (
    <>
      <Container className='product-details-container'>
        <aside>
          <div className="main-image">
            <Image src={newImage} alt="" />
          </div>
          <div className="thumbnail-image">
            <Image className="thumbnail_1" src={image_1} alt="" onClick={changeImage1} />
            <Image className="thumbnail_2" src={image_2} alt="" hidden={image_2 === ''} onClick={changeImage2} />
            <Image className="thumbnail_3" src={image_3} alt="" hidden={image_3 === ''} onClick={changeImage3} />
            <Image className="thumbnail_4" src={image_4} alt="" hidden={image_4 === ''} onClick={changeImage4} />
          </div>
        </aside>
        <aside>
          <h1>{product_name}</h1>
          <p>{descriptions}</p>
          <h5>{price}</h5>
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
              <Button onClick={() => {addToCart(item); setCartItems(item)}}>Add to Cart</Button>
            </Form>
          </div>
        </aside>
      </Container>
    </>
  );
}

export default ProductDetails;
