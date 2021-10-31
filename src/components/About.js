import React from 'react';
import { Icon } from '@iconify/react';
import "venobox/venobox/venobox.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const About = () => {
    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="zoom-out-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" data-aos="fade-right" data-aos-delay="200">
                    </div>
                    <div className="section-title col-xl-7 col-lg-6 icon boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left" data-aos-delay="300">
                        <h2>About Us</h2>
                        <p>Who we are</p>
                        <h6>
                            We are a digital transformation IT consultancy and software development company that provides cutting edge engineering solution. We help non-IT organizations, retails and software product companies improve business performance and quickly win new customers.
                            All of our technology solutions adapt seamlessly to your project requirements and business needs. CloudWaves is the expert partner you need to deliver innovative, scalable, and competitive results.
                        </h6>
                        <div className="icon-box">
                            <div className="icon"><Icon icon="bx:bx-fingerprint" /></div>
                            <h4 className="title"><a href="">Vision</a> </h4>
                            <p className="description">To be the leading apps and software developers that solve problem of the general public companies, cooperates and business solution services provider in Africa.</p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><Icon icon="bx:bx-gift" /></div>
                            <h4 className="title"><a href="">Mission</a></h4>
                            <p className="description">Shape the future of software development by creating unprecedented value, solutions and opportunity for our customers and business partners.</p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><Icon icon="bx:bx-atom" /></div>
                            <h4 className="title"><a href="">Core Values</a></h4>
                            <ul className="description">
                                <li>Integrity</li>
                                <li>Innovation</li>
                                <li>Teamwork</li>
                                <li>Quality</li>
                                <li>Customer Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
