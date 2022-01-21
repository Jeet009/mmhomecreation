import { Col, Container, Row } from "react-bootstrap";
import styles from "./portfolio.module.css";

function bedroom() {
  return (
    <div className={styles.main + " " + "extraMargin"}>
      <Container>
        <Row className={styles.container}>
          <center>
            <h1>Gallery</h1>
            <h2>Bedroom</h2>
          </center>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default bedroom;
