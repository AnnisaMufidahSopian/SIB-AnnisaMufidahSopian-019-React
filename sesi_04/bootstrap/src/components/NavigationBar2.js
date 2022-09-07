import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function HomeworkNavbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">QTemu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Create Meetup</Nav.Link>
              <Nav.Link href="#link">Explore</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeworkNavbar;
