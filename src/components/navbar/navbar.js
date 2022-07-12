import "./navbar.css";
import React from "react";

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <div class="logo">
          <img src="SC" alt="Logo Image" />
        </div>
        <div class="hamburger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
