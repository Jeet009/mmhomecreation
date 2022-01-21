import { Col, Container, Row } from "react-bootstrap";
import styles from "./portfolio.module.css";

function office() {
  return (
    <div className={styles.main + " " + "extraMargin"}>
      <Container>
        <Row className={styles.container}>
          <center>
            <h1>Gallery</h1>
            <h2>Office</h2>
          </center>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default office;
