import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = (props) => {
  return (
     <footer className="bg-dark text-light py-4" style={{marginTop:"90vh"}}>
      <Container >
        <Row>
          <Col xs={12} md={4} className="text-center text-md-start mb-3" >
            <h5>About Us</h5>
            <p>
              We share stories and experiences every day. Stay connected with
              us for more updates.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center mb-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-light text-decoration-none">Terms of Service</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-end mb-3">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +39 123 456 789</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center mt-3">
            <small>&copy; {new Date().getFullYear()} YourCompanyName</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
