import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
             <footer className=" footer-section mt-5 bg-black text-white text-center">
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                Trendy Inventory, Safe Payment, Best Services.
              </p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>
                Email: mahigm7.mahi@gmail.com
                <br />
                Phone: +8801732317577
              </p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <p>Stay connected on social media:</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href='https://www.facebook.com/gmmahi698'>Facebook</a>
                </li>
                <li className="list-inline-item">
                  <a href='https://twitter.com/MahiGolam'>Twitter</a>
                </li>
                <li className="list-inline-item">
                  <a href='https://instagram.com/gmmahi01?igshid=NTc4MTIwNjQ2YQ=='>Instagram</a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <p className="text-center">Developer: Golam Moula Mahi</p>
        </Container>
      </footer>
        </div>
    );
};

export default Footer;