import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="nav-link text-first">
            <b>QTemu</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/CreateMeetup" className="nav-link">
            Create Meetup
          </Nav.Link>
          <Nav.Link as={Link} to="/Explore" className="nav-link">
            Explore
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/Login" className="nav-link">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default NavBarMenu;
