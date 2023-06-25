import React, { useState } from 'react';
import { Navbar, Image, Container, Nav, Form, Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

import '../Home/Home.css';
import { productList } from '../Helper/ProductList';
import { Outlet } from 'react-router-dom';

function Home() {
  const [products] = useState([...productList()]);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image
              src={`/img/store_logo.png`}
              className="rounded-circle"
              width={70}
              height={70}
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link href='/products'>Products</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href='/cart'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className='card-container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
}

export default Home;
