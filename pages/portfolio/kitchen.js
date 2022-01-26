import { Col, Container, Row } from "react-bootstrap";
import styles from "./portfolio.module.css";
import one from "../../public/assets/kitchen/one.jpeg";
import last from "../../public/assets/kitchen/last.jpg";

function kitchen() {
  return (
    <div className={styles.main + " " + "extraMargin"}>
      <Container>
        <Row className={styles.container}>
          <center>
            <h1>Gallery</h1>
            <h2>Kitchen</h2>
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
                backgroundImage: `url(https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            ></div>
          </Col>
          <Col xs={12} md={6}>
            <div
              className={styles.bg + " " + "shadow"}
              style={{
                backgroundImage: `url(${last.src})`,
                backgroundPosition: "center",
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default kitchen;
