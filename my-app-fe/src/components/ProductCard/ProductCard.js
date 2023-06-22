import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./ProductCard.css";
import { productList } from '../Helper/ProductList';

function ProductCard() {
  const [products] = useState([...productList()]);

  return (
    <>
      <section>
        {products.map((product) => (
            <Card key={product.id} as={Link} to={`/product-details/${product.id}`}>
              <Card.Img variant="top" src={product.image_1} />
              <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
        ))}
      </section>
    </>
  );
}

export default ProductCard;
