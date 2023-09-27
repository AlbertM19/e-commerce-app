import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./ProductCard.css";

function ProductCard({ product }) {

  return (
    <Card as={Link} to={`/product-details/${product.id}`}>
      <Card.Img variant="top" src={product.image_1} />
      <Card.Body>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
