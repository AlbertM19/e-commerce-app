import React from "react";
import { Card } from "react-bootstrap";
import { getProduct } from "../Helper/ProductList";
import "./ProductCard.css";

function ProductCard() {
  const products = [...getProduct()];

  return (
    <>
      {products.map((item, index) => (
          <Card key={index}>
            <Card.Img variant="top" src={item.image_1} />
            <Card.Body>
              <Card.Title>{item.product_name}</Card.Title>
              <Card.Text>{item.descriptions}</Card.Text>
            </Card.Body>
          </Card>
      ))}
    </>
  );
}

export default ProductCard;
