import { Navbar, Image, Container, Nav, Form, Button, Badge } from 'react-bootstrap'

function NavBar({ cart }) {

  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="/">
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
              name="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href='/'>Products</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href='/cart'>Cart<Badge className='bg-danger' hidden={cart.itemQty === 0}>{cart.itemQty}</Badge></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar