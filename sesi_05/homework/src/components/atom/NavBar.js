import React from "react";
import { Container, Navbar } from "react-bootstrap";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavBarMenu />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
