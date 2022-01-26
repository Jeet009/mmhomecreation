import { Col, Container, Row } from "react-bootstrap";
import styles from "./portfolio.module.css";
import one from "../../public/assets/livingspace/one.jpeg";
import two from "../../public/assets/livingspace/two.jpeg";
import three from "../../public/assets/livingspace/three.jpeg";
import four from "../../public/assets/livingspace/four.jpeg";

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
                backgroundImage: `url(${one.src})`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(${two.src})`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(${three.src})`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(${four.src})`,
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default livingspace;
