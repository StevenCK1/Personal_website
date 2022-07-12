import "./landingPage.css";
import React from "react";

function LandingPage() {
  return (
    <React.Fragment>
      <article className="landing-container">
        <article className="landing-text-container">
          <h1> Hi, I'm Steven Cheung</h1>
          <p>London based, full-stack developer</p>
        </article>
        <img
          className="landing-img"
          src="https://pbs.twimg.com/media/E610YRMXoAAjvxa?format=jpg&name=large"
          alt="Landing pic"
        />
      </article>
    </React.Fragment>
  );
}

export default LandingPage;
