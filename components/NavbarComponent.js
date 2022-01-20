import Link from "next/link";
import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ModalContext } from "../context/ModalContext";
import styles from "./navbar.module.css";
import PortfolioModal from "./PortfolioModal";

function NavbarComponent() {
  const { setModal } = useContext(ModalContext);
  const handleModalOpen = () => {
    setModal(true);
  };
  return (
    <>
      <PortfolioModal />
      <Navbar
        className={"navbar-bg shadow" + " " + styles.navbarBg}
        expand="lg"
        fixed="top"
      >
        <Container className="navbar-container">
          {/* Logo  */}
          <Navbar.Brand className={styles.logo}>
            <h1>
              <Link href="/"> MM </Link>
            </h1>
            Home Creation.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Buttomn */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <hr width="100%" color="black" />
              <Nav.Link onClick={handleModalOpen}>
                <h6>Portfolio</h6>
              </Nav.Link>
              <Nav.Link>
                <h6>
                  <Link href="/about">About</Link>
                </h6>
              </Nav.Link>
              <Nav.Link>
                <h6>
                  <Link href="/contact">Contact</Link>
                </h6>
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
    </>
  );
}

export default NavbarComponent;
