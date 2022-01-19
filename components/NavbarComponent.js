import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./navbar.module.css";

function NavbarComponent() {
  return (
    <Navbar
      className={"navbar-bg shadow" + " " + styles.navbarBg}
      expand="lg"
      fixed="top"
    >
      <Container className="navbar-container">
        {/* Logo  */}
        <Navbar.Brand href="/" className={styles.logo}>
          <h1>MM</h1>
          Home Creation.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Buttomn */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <hr width="100%" color="black" />
            <Nav.Link>
              <h6>Portfolio</h6>
            </Nav.Link>
            <Nav.Link>
              <h6>About</h6>
            </Nav.Link>
            <Nav.Link>
              <h6>Contact</h6>
            </Nav.Link>
            <Nav.Link>
              <h6 className="fa fa-instagram"></h6>
            </Nav.Link>
            <Nav.Link>
              <h6 className="fa fa-facebook-square"></h6>
            </Nav.Link>
            <Nav.Link>
              <h6 className="fa fa-youtube-play"></h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
