import React, { useContext } from 'react';
import { Navbar, Image, Container, Nav, Form, Button, Badge } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';

function Home({cartCount}) {
  const cartTotal = cartCount;
  

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
            <Nav.Link href='/'>Products</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href='/cart'>Cart<Badge className='bg-danger'>{cartTotal}</Badge></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
