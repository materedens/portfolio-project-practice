import React from "react";
import Typed from "react-typed";
import { Icon } from '@iconify/react';
import { Carousel } from "react-bootstrap";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
            
                <h1>Better Solutions For Your Business</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design", "Software Development", "IT Support", "IT Infrastructure", "IT Consultancy"]}
                typeSpeed={40} backSpeed={60} loop
                />
                {/* <div class="d-flex align-items-center">
                   <i className="get-started-icon"><Icon icon="bx:bxs-right-arrow-alt" /></i>
                   <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div> */}
                {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
            </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="img/header-bg.jpg" alt="K HUB" />
          <Carousel.Caption>
               {/* <h1>Better Solutions For Your Business</h1>
               <Typed 
                className="typed-text"
                strings={["Web Design", "Software Development", "IT Support", "IT Infrastructure", "IT Consultancy"]}
                typeSpeed={40} backSpeed={60} loop
                /> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="img/hero-bg.jpg" alt="K HUB" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="img/header-bg.jpeg" alt="K HUB" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="img/header-bg1.jpg" alt="K HUB" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="img/header-bg2.jpg" alt="K HUB" />
        </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default Header
