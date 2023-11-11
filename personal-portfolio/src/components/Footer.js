import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-end">
          <Col size={12} sm={6} className="text-center text-sm-end my-5">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/nirupama-prasad-90a2aa199/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Nirupama654" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.hackerrank.com/profile/prasadnirupama8" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
            <p>&copy; 2023 All Rights Reserved, Nirupama</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
