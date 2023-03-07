import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/tv-removebg-preview.png";
import image2 from "../../images/xbox.png";
import image3 from "../../images/headphone.png";
import watch from '../../images/watch.png'
import shoes from '../../images/shoes.png'
import bag from '../../images/bag.png'

import './Home.css'
const Home = () => {
  return (
    
   <div>
     <Carousel indicators={false}>
      <Carousel.Item className="mt-5">
        <img
          className="d-block m-auto"
          src={image1}
          alt="First slide"
          style={{width:'380px', height:'500px'}}
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
          style={{width:'550px', height:'700px'}}
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
          style={{width:'380px', height:'450px'}}

        />
      </Carousel.Item>
    </Carousel>


    <div className="bg-danger">

    </div>
    <div class="container text-center my-5">
                <div class="row g-4 catagoris">

                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="p-3 border rounded-3 bg-warning d-flex align-items-center justify-content-around">
                        <h1 class="text-white">Watch</h1>
                        <img src={watch} alt=""/>
                    </div>
                  </div>

                     <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="p-3 border rounded-3 bg-danger d-flex align-items-center justify-content-around">
                            <h1 class="text-white">Shoes</h1>
                            <img src={shoes} alt=""/>
                        </div>
                      </div>

                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="p-3 border rounded-3 bg-primary d-flex align-items-center justify-content-around">
                        <h1 class="text-white">Bag</h1>
                        <img src={bag} alt=""/>
                    </div>
                  </div>

                </div>
              </div>
   </div>
   
  );
};

export default Home;
