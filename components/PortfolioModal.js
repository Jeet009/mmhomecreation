import React, { useContext, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { ModalContext } from "../context/ModalContext";
import styles from "./portfolio.module.css";

function PortfolioModal() {
  const { modal, setModal } = useContext(ModalContext);

  const handleClose = () => setModal(false);

  return (
    <>
      <Modal show={modal} onHide={handleClose} size="lg" centered>
        <Modal.Body className={styles.portfolio}>
          <center>
            <h1>MM</h1>
            <h2>Home Creation</h2>
          </center>
          <hr />
          <Row>
            <Col xs={6}>
              <div
                className={styles.portfolioDiv}
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/4030908/pexels-photo-4030908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                }}
              >
                <div className={styles.overlay}>
                  <h2>Kitchen</h2>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div
                className={styles.portfolioDiv}
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                }}
              >
                <div className={styles.overlay}>
                  <h2>Office</h2>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div
                className={styles.portfolioDiv}
                style={{
                  backgroundImage: `url( https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                }}
              >
                <div className={styles.overlay}>
                  <h2>Bedroom</h2>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div
                className={styles.portfolioDiv}
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/7786783/pexels-photo-7786783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                }}
              >
                <div className={styles.overlay}>
                  <h2>Living Space</h2>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <button className="btn btn-custom-white" onClick={handleClose}>
            Close
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PortfolioModal;
