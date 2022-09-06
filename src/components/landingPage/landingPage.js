import "./landingPage.css";
import React from "react";
import EaseInBottom from "../framerAnimation/easeInBottom";

function LandingPage() {
  return (
    <React.Fragment>
      <div className="landing-container" id="landing-container">
        <EaseInBottom>
          <article className="land-text-container">
            <div className="hover1-container">
              <p className="land-text-hover1">Hi,</p>
            </div>

            <div className="hover2-container">
              <p className="land-text-hover2"> I'm Steven Cheung</p>
            </div>

            <div className="hover3-container">
              <p className="land-text-hover3">London based,</p>
            </div>

            <div className="hover4-container">
              <p className="land-text-hover4">Full Stack Developer</p>
            </div>
          </article>
        </EaseInBottom>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
