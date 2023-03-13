import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import flip from "../../images/flip.avif";
import boyes from "../../images/boyes.avif"
import { CardGroup, Card } from "react-bootstrap";
import { FcCallback } from 'react-icons/fc';
const About = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row>
          <Col className="bg shadow rounded" md={6}>
            <div>
              <h2 className="py-4 text-center text-secondary mt-4 rounded-circle">
                About Our Company
              </h2>
              <p className="my-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula ante a risus fringilla, quis ultricies arcu maximus.
                Sed non est non est facilisis accumsan. Integer molestie laoreet
                risus, nec lobortis nunc consequat vel. Sed condimentum at velit
                vel bibendum. Phasellus eget augue euismod, pulvinar enim eget,
                imperdiet nulla.
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
              This is a description of card 1. It can contain any type of
              content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deserunt eius deleniti dolor, explicabo dolores quaerat perferendis accusamus delectus velit ut et minus. Rem voluptatem possimus soluta esse molestias molestiae temporibus libero dolores odio quidem, impedit error nihil perspiciatis consequatur.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-primary shadow">
          {/* <Card.Img variant="top" src="https://via.placeholder.com/300x200" /> */}
          <Card.Body>
            <Card.Title className="fs-1 text-warning">02</Card.Title>
            <Card.Text className="fs-5 text-white rounded shadow">
              This is a description of card 1. It can contain any type of
              content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deserunt eius deleniti dolor, explicabo dolores quaerat perferendis accusamus delectus velit ut et minus. Rem voluptatem possimus soluta esse molestias molestiae temporibus libero dolores odio quidem, impedit error nihil perspiciatis consequatur.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="bg-secondary shadow">
          {/* <Card.Img variant="top" src="https://via.placeholder.com/300x200" /> */}
          <Card.Body>
            <Card.Title className="fs-1 text-dark">03</Card.Title>
            <Card.Text className="fs-5 text-white rounded shadow">
              This is a description of card 1. It can contain any type of
              content. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deserunt eius deleniti dolor, explicabo dolores quaerat perferendis accusamus delectus velit ut et minus. Rem voluptatem possimus soluta esse molestias molestiae temporibus libero dolores odio quidem, impedit error nihil perspiciatis consequatur.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>



      <Container className="mt-5 py-4">
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
              <h1 className="text-center mt-5"><FcCallback className="me-4 mb-1"/>01843882834</h1>
            </div>
          </Col>
         
        </Row>
      </Container>

    </section>
  );
};

export default About;
