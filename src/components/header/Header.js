import React from "react";
import { Navbar, Nav, NavDropdown, Row, Container } from "react-bootstrap";

function Header() {
  return (
    <Row>
      <Container>
        <Navbar collapseOnSelect expand="xl" bg="#1111" variant="light">
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.shopify.com/s/files/1/1151/0394/t/8/assets/logo.png?v=15191497012945772810"
              width="50%"
              height="20%"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#aboutus">About us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#contactus">Contact us</Nav.Link>
              <Nav.Link eventKey={2} href="#profile">
                Sami Koja
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Row>
  );
}

export default Header;
