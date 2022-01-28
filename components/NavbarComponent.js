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
            <Link href="/">
              <img src="/assets/logo.png" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="fa fa-bars" style={{ color: "white" }}></span>
          </Navbar.Toggle>

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
                <h6
                  className="fa fa-instagram"
                  onClick={() => {
                    window.open(
                      "https://instagram.com/mm_home_creation?utm_medium=copy_link"
                    );
                  }}
                ></h6>
              </Nav.Link>
              <Nav.Link>
                <h6
                  className="fa fa-facebook-square"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/MM-HOME-Creation-110538504852837/"
                    );
                  }}
                ></h6>
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
