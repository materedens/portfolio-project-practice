import React from "react";
import logo from "../hero-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
 <div className="container">
  <a className="navbar-brand" href="#back-top"><img className="logo" src={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto py-4 py-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link scrollto" href="#about">about</a>
      </li>
      <li className="nav-item">
        <a className="nav-link scrollto" href="#services">services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link scrollto" href="#clients">our clients</a>
      </li>
      <li className="nav-item">
        <a className="nav-link scrollto" href="#contact">contact</a>
      </li>
      <li>
        <a className="getstarted scrollto" href="#about">Get Started</a>
      </li>
    </ul>
  </div>
 </div>
</nav>
    )
}

export default Navbar
