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
    
   <div className="bg">
     <Carousel indicators={false}>
      <Carousel.Item className="mt-5">
        <img
          className="d-block m-auto"
          src={image1}
          alt="First slide"
          style={{width:'480px', height:'550px'}}
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
          style={{width:'550px', height:'550px'}}
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
          style={{width:'380px', height:'550px'}}

        />
      </Carousel.Item>
    </Carousel>


    <div>
        <h1 className="text-center mt-5 ">Welcome to Ema-John!!</h1>
        <p className=" fs-5 m-auto" style={{width:'650px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, necessitatibus quos expedita, deleniti eveniet labore assumenda exercitationem officia eius culpa pariatur repellat nihil est quo maiores laudantium voluptas consequuntur fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, iure.</p>
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
