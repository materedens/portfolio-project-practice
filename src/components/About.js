import React from 'react';
import { Icon } from '@iconify/react';
import "venobox/venobox/venobox.min.css";

const About = () => {
    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
                    </div>
                    <div className="section-title col-xl-7 col-lg-6 icon boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h2>About Us</h2>
                        {/* <h2>IT Business Solutions.</h2> */}
                        <p>Who We Are?</p>
                        <div className="icon-box">
                            <div className="icon"><Icon icon="bx:bx-fingerprint" /></div>
                            <h4 className="title"><a href="">Vision</a> </h4>
                            <p className="description"></p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><Icon icon="bx:bx-gift" /></div>
                            <h4 className="title"><a href="">Mission</a></h4>
                            <p className="description"></p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><Icon icon="bx:bx-atom" /></div>
                            <h4 className="title"><a href="">Core Values</a></h4>
                            <p className="description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
