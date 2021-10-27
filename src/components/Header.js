import React from "react";
import Typed from "react-typed";
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Better Solutions For Your Business</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                typeSpeed={40} backSpeed={60} loop
                />
                <div class="d-flex align-items-center">
                   <i className="get-started-icon"><Icon icon="bx:bxs-right-arrow-alt" /></i>
                   <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
                {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
            </div>
            
        </div>
    )
}

export default Header
