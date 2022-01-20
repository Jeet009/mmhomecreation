import { Badge, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/pages.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Top Banner  */}
      <main className={styles.main}>
        <div className={styles.overlay}>
          <h4>Welcome To</h4>
          <h1>MM </h1>
          <h2>Home Creation .</h2>
        </div>
      </main>

      {/* Fact  */}
      <div className={styles.div}>
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

      {/* Home  */}
      <div className={styles.div}>
        <Row>
          <Col md={12} lg={6} className={styles.bgText}>
            <div>
              <Badge>MM Home Creation .</Badge>
              <h1>HOME .</h1>
              <p>
                Dolor non qui cupidatat cillum nulla pariatur aliquip commodo
                voluptate veniam pariatur labore adipisicing. Esse ut incididunt
                aliqua consequat laborum est tempor incididunt. Nisi eiusmod
                dolor est officia. Dolor non qui cupidatat cillum nulla pariatur
                aliquip commodo voluptate veniam pariatur labore adipisicing.
              </p>
              <hr width="40%" />
            </div>
          </Col>
          <Col md={12} lg={6} className={styles.bgImage}></Col>
        </Row>
      </div>

      {/* image  */}
      <div className={styles.div}>
        <Row>
          <Col md={12} lg={6} className={styles.ImgOne}>
            <div className={styles.overlaySm}>
              <h2>Let us help you to build an office !</h2>
            </div>
          </Col>
          <Col md={12} lg={6} className={styles.ImgTwo}>
            <div className={styles.overlaySm}>
              <h2>Looking for an aesthetic kitchen ?</h2>
            </div>
          </Col>
        </Row>
      </div>

      <div className={styles.div}>
        <div className={styles.hire}>
          <h1>Hire Us!</h1>
          <Container>
            <p>
              Ea aliqua officia est nostrud duis fugiat quis est qui occaecat
              adipisicing voluptate eu occaecat. Dolor non laboris ex ipsum ea
              officia tempor est ea aliqua mollit. Irure ipsum dolor consectetur
              ipsum enim eiusmod aliqua ut non minim reprehenderit et. Consequat
              voluptate proident ex dolor ut ullamco amet cillum ut do in. Et
              velit dolor duis Lorem. Anim in ea laborum duis fugiat consequat
              do. Commodo id esse magna culpa ullamco culpa aliquip enim.
            </p>

            <button className="btn btn-custom">Hire Us . </button>
          </Container>
        </div>
      </div>
    </div>
  );
}
