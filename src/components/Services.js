import React from 'react';
import { Icon } from '@iconify/react';

const Services = () => {
    return (
    <section id="services" className="services section-bg" data-aos="zoom-in">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-6">
            <div className="icon-box">
              <i><Icon icon="carbon:application-web" /></i>
              <h4><a href="#">Web Design</a></h4>
              <p>Web design services comprise the processes of user interface (UI) and user experience (UX) design of any web-based solution.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i><Icon icon="bx:bx-code-block" /></i>
              <h4><a href="#">Software Development</a></h4>
              <p>Software development services are aimed at designing, engineering, deploying, supporting, and evolving various software types.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i><Icon icon="eos-icons:software-outlined" /></i>
              <h4><a href="#">Software Outsourcing</a></h4>
              <p>Software outsourcing services involve working with a third-party team with specialist skills and expertise.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i><Icon icon="icon-park:adjacent-item" /></i>
              <h4><a href="#">IT Consultancy</a></h4>
              <p>Information technology (IT) consulting services allow companies to implement IT strategies and solutions to achieve business-IT alignment.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i><Icon icon="bx:bx-support" /></i>
              <h4><a href="#">IT Support</a></h4>
              <p>IT support comprises procedures intended to maintain failsafe IT workflows and reduce IT costs. Business world uses IT support on daily.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i><Icon icon="carbon:infrastructure-classic" /></i>
              <h4><a href="#">IT Infrastructure</a></h4>
              <p>IT infrastructure services cover administration, monitoring, troubleshooting, and optimization of corporate IT infrastructures.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}

export default Services
