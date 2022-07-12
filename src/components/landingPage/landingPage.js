import "./landingPage.css";
import React from "react";
import { Col, Row } from "antd";

function LandingPage() {
  return (
    <React.Fragment>
      <div className="landing-container" id="landing-container">
        <Row>
          <Col sm={12}>
            <article className="land-text-container">
              <h1> Hi, I'm Steven Cheung</h1>
              <p>London based, full-stack developer</p>
            </article>
          </Col>
          <Col sm={12}>
            <img
              className="landing-img"
              src="https://pbs.twimg.com/media/E610YRMXoAAjvxa?format=jpg&name=large"
              alt="Landing pic"
            />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
