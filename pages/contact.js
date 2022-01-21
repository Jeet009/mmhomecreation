import { Col, Container, Row } from "react-bootstrap";
import TopBannerComponent from "../components/TopBannerComponent";
import styles from "../styles/pages.module.css";

function Contact() {
  return (
    <div className="extraMargin">
      <TopBannerComponent
        data={{
          h2: "Contact Us",
          imgUrl:
            "https://images.pexels.com/photos/4559707/pexels-photo-4559707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
      />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9799705367113!2d88.35520451543914!3d22.579852438393672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b16c39189f%3A0xa41906ec21910726!2s41f%2C%20161%2F1%2C%20Mahatma%20Gandhi%20Rd%2C%20Sector%20I%2C%20Barabazar%20Market%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1642776634674!5m2!1sen!2sin"
                style={{
                  border: "0px",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
                className="shadow"
              ></iframe>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.mapText}>
              <div>
                <h2>ADDRESS</h2>
                <h6>
                  03/A, NIRMAL DUTTA LANE, GHATBANDAR, KHAGRA, BERHAMPORE, MSD.
                </h6>
                <h6>161/1 M.G. Road,Room no. 41F, 2nd Floor,kolkata 700007</h6>
                <h6>
                  <span className="fa fa-phone-square">
                    {"   "}9593490671, 8145722286
                  </span>
                </h6>
                <h6>
                  <span className="fa fa-whatsapp">
                    {"   "}9593490671, 8145722286
                  </span>
                </h6>
                <h6>
                  <span className="fa fa-envelope">
                    {"   "} MMHOMECREATION2022.GMAIL.COM
                  </span>
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
