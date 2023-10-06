import React, { useState, useEffect } from 'react'
import { Button, Container, Image, InputGroup, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './ProductDetails.css'
import { findItem, useStoreContext } from '../contexts/StoreContext'

function ProductDetails() {
  const { id } = useParams()
  const { cart, setCart, ENDPOINT, setError } = useStoreContext()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [newImage, setNewImage] = useState(null)
  const { image_1, image_2, image_3, image_4, product_name, description, price, price_int } = product
  const item = {
    'id': id, 'product_name': product_name, 'quantity': quantity,
    'price': price_int, 'product_img': image_1, 'checkedout': false
  }

  useEffect(() => {
    axios.get(`${ENDPOINT}/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(e => setError(e))
  }, [])

  function itemQty(num) {
    setQuantity(prev => {
      return prev + num
    })
  }

  function changeImage(image) {
    return setNewImage(image)
  }

  const addToCart = () => {
    const itemIndex = findItem(cart.items, id)

    if (itemIndex !== -1) {
      const updatedItem = [...cart.items]
      updatedItem[itemIndex].quantity += quantity
      setCart({
        items: [...updatedItem],
        itemQty: cart.itemQty += quantity
      })
    } else {
      setCart({
        items: [...cart.items, item],
        itemQty: cart.itemQty += quantity
      })
    }
  }

  return (
    <>
      <Container className='product-details-container'>
        <aside>
          <div className="main-image">
            <Image src={newImage ?? image_1} alt="" />
          </div>
          <div className="thumbnail-image">
            <Image className="thumbnail_1" src={image_1} alt="" onClick={() => changeImage(image_1)} />
            <Image className="thumbnail_2" src={image_2} alt="" hidden={image_2 === ''} onClick={() => changeImage(image_2)} />
            <Image className="thumbnail_3" src={image_3} alt="" hidden={image_3 === ''} onClick={() => changeImage(image_3)} />
            <Image className="thumbnail_4" src={image_4} alt="" hidden={image_4 === ''} onClick={() => changeImage(image_4)} />
          </div>
        </aside>
        <aside>
          <h1>{product_name}</h1>
          <p>{description}</p>
          <h5>{price}</h5>
          <div>
            <Form>
              <InputGroup>
                <Button disabled={quantity === 1} onClick={() => itemQty(-1)}>-</Button>
                <Form.Control type="number"
                  name="quantity"
                  value={quantity}
                  min={1}
                  onChange={(e) => setQuantity(e.target.value)}
                  onWheel={(e) => e.preventDefault()}
                />
                <Button onClick={() => itemQty(1)}>+</Button>
              </InputGroup>
              <Button onClick={addToCart}>Add to Cart</Button>
            </Form>
          </div>
        </aside>
      </Container>
    </>
  )
}

export default ProductDetails
