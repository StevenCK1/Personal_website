import "./App.css";
import React from "react";
import LandingPage from "../landingPage/landingPage";
import AboutMe from "../aboutMe/aboutMe.js";
import PortfolioPage from "../portfolioPage/portfolioPage.js";
import ContactMe from "../contactMe/contactMe.js";

const App = () => (
  <React.Fragment>
    <LandingPage />
    <AboutMe />
    <PortfolioPage />
    <ContactMe />
  </React.Fragment>
);

export default App;
