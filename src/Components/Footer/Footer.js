import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
             <footer className="mt-5 bg-black text-white text-center">
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                We are a team of developers building amazing web applications.
              </p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>
                Email: info@example.com
                <br />
                Phone: (555) 555-5555
              </p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <p>Stay connected on social media:</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link>Facebook</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Twitter</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Instagram</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <p className="text-center">&copy; 2023 My Awesome App</p>
        </Container>
      </footer>
        </div>
    );
};

export default Footer;