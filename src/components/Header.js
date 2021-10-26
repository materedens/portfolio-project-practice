import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and websites promotions</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                typeSpeed={40} backSpeed={60} loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
                {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
            </div>
            
        </div>
    )
}

export default Header
