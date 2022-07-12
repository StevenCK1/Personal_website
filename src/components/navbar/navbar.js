import "./navbar.css";
import React from "react";

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <div class="logo">
          <p>S Cheung</p>
        </div>
        <div class="hamburger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#landing-container">Home</a>
          </li>
          <li>
            <a href="#about-me-page-container">About me</a>
          </li>
          <li>
            <a href="#portfolio-page-container">Portfolio</a>
          </li>
          <li>
            <a href="#contact-me-page-container">Contact Me</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
