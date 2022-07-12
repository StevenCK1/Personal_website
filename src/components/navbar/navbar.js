import "./navbar.css";
import React, { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <React.Fragment>
      <nav>
        <div class="logo">
          <p>S Cheung</p>
        </div>
        <div class="hamburger" onClick={handleClick}>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class={show ? "nav-links open" : "nav-links"}>
          <li>
            <a href="#landing-container" onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-me-page-container" onClick={handleClick}>
              About me
            </a>
          </li>
          <li>
            <a href="#portfolio-page-container" onClick={handleClick}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact-me-page-container" onClick={handleClick}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
