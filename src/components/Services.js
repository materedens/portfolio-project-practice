import React from 'react'

const Services = () => {
    return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="bi bi-laptop"></i>
              <h4><a href="#">Web Development</a></h4>
              <p></p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-bar-chart"></i>
              <h4><a href="#">Software Development</a></h4>
              <p></p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-brightness-high"></i>
              <h4><a href="#">Website Hosting</a></h4>
              <p></p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-briefcase"></i>
              <h4><a href="#">IT Consultation</a></h4>
              <p></p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-card-checklist"></i>
              <h4><a href="#">IT Support</a></h4>
              <p></p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-clock"></i>
              <h4><a href="#">IT Infrastructure</a></h4>
              <p></p>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}

export default Services
