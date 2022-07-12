import "./App.css";
import React from "react";
import LandingPage from "../landingPage/landingPage";
import AboutMe from "../aboutMe/aboutMe.js";
import PortfolioPage from "../portfolioPage/portfolioPage.js";
import ContactMe from "../contactMe/contactMe.js";
import Navbar from "../navbar/navbar";

const App = () => (
  <React.Fragment>
    <Navbar />
    <LandingPage />
    <AboutMe />
    <PortfolioPage />
    <ContactMe />
  </React.Fragment>
);

export default App;
