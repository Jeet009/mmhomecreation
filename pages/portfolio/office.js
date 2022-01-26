import { Col, Container, Row } from "react-bootstrap";
import styles from "./portfolio.module.css";
import one from "../../public/assets/officespace/one.jpg";
import two from "../../public/assets/officespace/two.jpg";
import three from "../../public/assets/officespace/three.jpg";
import four from "../../public/assets/officespace/four.jpg";

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
                backgroundImage: `url(${one.src})`,
                backgroundPosition: "center",
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
                backgroundPosition: "center",
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default office;
