import { Badge, Col, Row } from "react-bootstrap";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.overlay}>
          <h4>Welcome To</h4>
          <h1>MM </h1>
          <h2>Home Creation .</h2>
        </div>
      </main>

      <div className={styles.gist}>
        <Row>
          <Col md={12} lg={6} className={styles.gistImage}>
            <img src="assets/fact.png" />
          </Col>
          <Col md={12} lg={6} className={styles.gistText}>
            <div>
              <Badge>MM Home Creation .</Badge>
              <h1>FACTS .</h1>
              <p>
                Dolor non qui cupidatat cillum nulla pariatur aliquip commodo
                voluptate veniam pariatur labore adipisicing. Esse ut incididunt
                aliqua consequat laborum est tempor incididunt. Nisi eiusmod
                dolor est officia. Dolor non qui cupidatat cillum nulla pariatur
                aliquip commodo voluptate veniam pariatur labore adipisicing.
                Esse ut incididunt aliqua consequat laborum est tempor
                incididunt. Nisi eiusmod dolor est officia.
              </p>
              <hr width="40%" />
            </div>
          </Col>
        </Row>
      </div>

      <footer className={styles.footer}>
        <a>MM Home Creation .</a>
      </footer>
    </div>
  );
}
