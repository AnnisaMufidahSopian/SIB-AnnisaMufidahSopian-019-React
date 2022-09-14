import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavBarMenu = () => {
  return (
    <>
      <Navbar.Brand href="#home">QTemu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="MenuCreateMeetup.js">Create Meetup</Nav.Link>
          <Nav.Link href="#link">Explore</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#link">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default NavBarMenu;
