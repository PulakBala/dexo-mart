import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/tv-removebg-preview.png";
import image2 from "../../images/xbox.png";
import image3 from "../../images/headphone.png";
import watch from "../../images/watch.png";
import shoes from "../../images/shoes.png";
import bag from "../../images/bag.png";
import save from "../../images/save.jpeg";
import fashionShoe from "../../images/fashion-shoe.webp";

import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import PopulerProducts from "../PopulerProducts/PopulerProducts";
import Commnet from "../Comment/Commnet";
import useTitle from "../../hook/useTitle";
import Footer from "../Footer/Footer";

const Home = () => {
  const populerProduct = useLoaderData();
  useTitle("Home");

  const [comments, setComments] = useState([""]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = event.target.elements.comment.value;
    setComments([...comments, newComment]);
    event.target.reset();
  };

  return (
    <div className="bg">
      <Carousel indicators={false}>
        <Carousel.Item className="mt-5">
          <img
            className="d-block m-auto"
            src={image1}
            alt="First slide"
            style={{ width: "480px", height: "550px" }}
          />
          {/* <Carousel.Caption className="text-danger">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block m-auto mb-5"
            src={image2}
            alt="Second slide"
            style={{ width: "550px", height: "550px" }}
          />

          {/* <Carousel.Caption className="text-danger">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item className="mt-5">
          <img
            className="d-block m-auto"
            src={image3}
            alt="Third slide"
            style={{ width: "380px", height: "550px" }}
          />
        </Carousel.Item>
      </Carousel>

      <div>
        <h1 className="text-center mt-5 ">
          Welcome to<marquee> DeXo MarT!!</marquee>
        </h1>
        <p className="text-secondary  text fs-3 m-auto  py-5 mb-5">
          We're thrilled to have you here. Explore our vast collection of
          products, carefully curated for your needs. Enjoy a seamless shopping
          experience, exceptional customer service, and secure transactions.
          Start discovering and find something special that enhances your
          lifestyle. Happy shopping!
        </p>
      </div>

      {/* catagoris */}
      <div class="container text-center">
        <div class="row g-4 catagoris">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="p-3 border rounded-3 bg-warning d-flex align-items-center justify-content-around">
              <h1 class="text-white">Watch</h1>
              <img src={watch} alt="" />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="p-3 border rounded-3 bg-danger d-flex align-items-center justify-content-around">
              <h1 class="text-white">Shoes</h1>
              <img src={shoes} alt="" />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="p-3 border rounded-3 bg-primary d-flex align-items-center justify-content-around">
              <h1 class="text-white">Bag</h1>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>

        <div class="card mt-5">
          <div class="row g-0">
            <div class="col-md-6">
              <img className="big1-img" src={save} alt="..." />
            </div>
            <div class="col-md-6 bg">
              <div class="card-body mt-5">
                <h5 class="card-title mt-5 " >Card Title</h5>
                <p class="card-text fs-5 mt-5 ">
                  Unleash Your Shopping Potential: Discover Endless
                  Possibilities at Dexo Mart!" "Transforming Online Shopping:
                  Elevate Your Experience with Dexo Mart!" "Uncover a World of
                  Shopping Delights: Explore Dexo Mart and Unleash Your Style!
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-5">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card-body bg">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text fs-5 ">
                  Shop Smarter, Shop Better: Experience the Best Deals and
                  Selection at Dexo Mart!" "Unlock Your Shopping Fantasies:
                  Step into Dexo Mart and Discover a World of
                  Possibilities!" "Indulge in Retail Therapy: Find Your Perfect
                  Match at Dexo Mart- Where Shopping Dreams Come True!"
                  "Embrace the Joy of Online Shopping: Dexo Mart - Your
                  Gateway to Exceptional Products and Services!" "Where Style
                  Meets Convenience: Dexo Mart - Your One-Stop Destination
                  for Fashion, Tech, Home, and More.Uncover Your Perfect Shopping Experience where Every Purchase Matters.Embrace the Future of Shopping where Innovation Meets Convenience.Your Shopping Haven Awaits: Indulge in Unparalleled Variety at <br/> <span className="text-danger">Dexo Mart</span>. <br/>
                  Enjoy a happy shopping."
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 16 mins ago</small>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img className="big1-img" src={fashionShoe} alt="..." />
            </div>
          </div>
        </div>

        {/* populer collection */}

        {/* <Gallery/> */}

        <div className="gallery mt-5">
          {populerProduct.map((populer) => (
            <PopulerProducts
              populer={populer}
              className="grid-item"
            ></PopulerProducts>
          ))}
        </div>
      </div>

      {/* comment section  */}
      <div className="comment-section text-center  mt-5 py-5">
        <h2>Comments</h2>
        <div className="comments">
          {comments.map((comment, index) => (
            <Commnet key={index} comment={comment}></Commnet>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="comment">Leave a comment:</label> */}
          <input
            className="comment my-4 py-5"
            placeholder="write your comments.."
            type="text"
            id="comment"
            name="comment"
            required
          />{" "}
          <br />
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
