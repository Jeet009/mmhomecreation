import Link from "next/link";
import { Badge, Col, Container, Row } from "react-bootstrap";
import TopBannerComponent from "../components/TopBannerComponent";
import styles from "../styles/pages.module.css";
import hero from "../public/assets/hero.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBannerComponent
        data={{
          h1: "MM",
          h2: "HOME CREATION",
          h4: "Welcome To",
          imgUrl: hero.src,
        }}
      />

      {/* Fact  */}
      <div className={styles.div}>
        <Row>
          <Col md={12} lg={6} className={styles.gistImage}></Col>
          <Col md={12} lg={6} className={styles.gistText}>
            <div>
              <Badge>MM Home Creation .</Badge>
              <h1>FACTS .</h1>
              <p>
                MM HOME CREATION believe in not only in designing interiors, but
                doing it passionately, intelligently, creatively, uniquely
                elegantly & luxuriously. We always try to create creative
                stylish luxurious affordable solution for your personal as well
                as professional and commercial space. We believe in maximum
                interaction and in depth discussions to understand your needs
                and persona and accordingly, provide you with options that
                satisfy your needs as well as your budget and are a reflection
                of luxurious & creative design.
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
                Our vision is to be a quality driven Interiors Design and
                Architectural Design consultancy services business in the
                Commercial, Industrial & Residential Markets for qualified
                Clients in all over West Bengal.
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
              MM HOME CREATION A Berhampore & Kolkata Based Residential which is
              a Commercial Interior Designing and Decorating Company Established
              by Mr Govinda Sharma along with Mr Pradip Marothi, In 2022.
            </p>

            <p>
              <h2>WHY US - </h2>
              <ul>
                <li>Creative, Vastu Approved Custom Made Designs,</li>
                <li>Attention To Details With Quality Materials,</li>
                <li>No Hidden Strategies,</li>
                <li>Efficient & Effective Planning,</li>
                <li>Professinal Executors/Labor/Designers,</li>
                <li>On Time Delivery,</li>
                <li>After sell Service,</li>
                <li>Long-term Customer Relationship</li>
              </ul>
            </p>

            <button className="btn btn-custom">
              <Link href="contact">Contact Now</Link>
            </button>
          </Container>
        </div>
      </div>
    </div>
  );
}
