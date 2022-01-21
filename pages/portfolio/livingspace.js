import { Col, Container, Row } from "react-bootstrap";
import styles from "./portfolio.module.css";

function livingspace() {
  return (
    <div className={styles.main + " " + "extraMargin"}>
      <Container>
        <Row className={styles.container}>
          <center>
            <h1>Gallery</h1>
            <h2>Living Space</h2>
          </center>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/3773572/pexels-photo-3773572.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/3457292/pexels-photo-3457292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/6510948/pexels-photo-6510948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default livingspace;
