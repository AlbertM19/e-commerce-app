import React, {useState} from 'react';
import { Navbar, Image, Container, Nav, Form, Button } from 'react-bootstrap';
import '../Home/Home.css';
import ProductCard from '../ProductCard/ProductCard';

function Home() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <Image src={`/img/store_logo.png`} className='rounded-circle' width={70} height={70} />
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container fluid>
                <ProductCard />
            </Container>
        </>
    );
}

export default Home;