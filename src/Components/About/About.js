import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import flip from "../../images/flip.avif";
import boyes from "../../images/boyes.avif"
import { CardGroup, Card } from "react-bootstrap";
import { FcCallback } from 'react-icons/fc';
import useTitle from "../../hook/useTitle";
import Footer from "../Footer/Footer";
const About = () => {
  useTitle('About');
  return (
    <section className="bg-light pt-5">
      <Container>
        <Row>
          <Col className="bg shadow rounded" md={6}>
            <div>
              <h2 className="py-4 text-center text-secondary mt-4 rounded-circle">
                About Our Company
              </h2>
              <p className="my-auto">
                We provide first class service for our customers. We have the authetic inventory of various products. We  value the safety of your products. I am thrilled to introduce you to Dexo Mart. Our platform is designed to revolutionize your online shopping experience and provide you with a wide range of products and services at your fingertips. we understand the value of convenience and simplicity, and our user-friendly interface.
              </p>
            </div>
          </Col>
          <Col className="rounded-circle" md={6}>
            <marquee>
              <img
                src={flip}
                alt="company about"
                className="img-fluid shadow rounded-circle"
              />
            </marquee>
          </Col>
        </Row>
      </Container>

      <CardGroup className="gap-4 mt-5 py-5 px-5">
        <Card className="bg-dark shadow">
          {/* <Card.Img variant="top" src="https://via.placeholder.com/300x200" /> */}
          <Card.Body>
            <Card.Title className="fs-1 text-primary">01</Card.Title>
            <Card.Text className="fs-5 text-white rounded shadow">
            We are excited to share with you the exceptional services offered by Dexo Mart. Our primary goal is to provide you with an unparalleled online shopping experience while prioritizing your satisfaction and convenience.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-primary shadow">
          {/* <Card.Img variant="top" src="https://via.placeholder.com/300x200" /> */}
          <Card.Body>
            <Card.Title className="fs-1 text-warning">02</Card.Title>
            <Card.Text className="fs-5 text-white rounded shadow">
            User-Friendly Interface: We understand the importance of a seamless browsing and shopping experience. Our website boasts an intuitive and easy-to-navigate interface, allowing you to effortlessly explore different categories, filter search results, compare products, and make informed purchase decisions. Finding the perfect item has never been easier.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-secondary shadow">
          {/* <Card.Img variant="top" src="https://via.placeholder.com/300x200" /> */}
          <Card.Body>
            <Card.Title className="fs-1 text-dark">03</Card.Title>
            <Card.Text className="fs-5 text-white rounded shadow">
              We are providing secured delivery services with smart payment system. An online payment system facilitates secure and convenient transactions over the internet. It allows customers to make payments electronically, using various methods such as credit cards. These systems employ encryption and authentication measures to safeguard sensitive financial information, ensuring a smooth and reliable payment process. 
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>



      <Container className="mt-5 ">
        <Row  style={{height:'400px'}}>

        <Col className="" md={4}  >
            
             <Image  src={boyes}
              alt="company about"
              className="img-fluid shadow rounded"
              style={{height:'400px'}}></Image>

        </Col>
          <Col className="bg shadow rounded" md={8}>
            <div>
              <h2 className="py-3 text-center text-secondary mt-4 rounded-circle">
                We realize that you lead a busy life, so we have made it easy for you to drop off your vehicle 24/7.
              </h2>
              <h1 className="text-center mt-5"><FcCallback className="me-4 mb-1"/>+8801732317577</h1>
            </div>
          </Col>
         
        </Row>

      </Container>

      <Footer/>

    </section>
  );
};

export default About;
