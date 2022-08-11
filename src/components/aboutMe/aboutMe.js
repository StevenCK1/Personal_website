import "./aboutMe.css";
import { Col, Row } from "antd";

import TechCard from "./techCard/techCard";
import { techSkills } from "../../libs/techSkills.js";

function AboutMe() {
  return (
    <div className="about-me-page-container" id="about-me-page-container">
      <h1>A little bit about me</h1>
      <article className="little-about-me">
        <p>
          I come from Mauritius and took a leap of faith to work in finance in
          London, and now I am taking a new leap of faith to follow my passion
          for tech. I love sports, music and learning about new technologies. To
          follow this passion for tech, I decided to change my career path and
          start learning how to code. Currently, I am studying to become a web
          developer. I was selected to join 200 (out of 1800) other bootcampers
          at the School of Code full stack web developer bootcamp. The intensive
          and immersive sixteen-week programming bootcamp focuses on exposing to
          a range of different industry best practices and concepts, Agile
          working methodologies, pair programming, and creative problem-solving.
        </p>
        <p>The pen is mightier than the sword, as they say...</p>
        <p>Take away the pen, the keyboard is mightier than the pen!</p>
      </article>
      <article className="tech-skills">
        <h2>Tech I have worked with</h2>
        <Row gutter={[24, 24]}>
          {techSkills.map((item) => {
            return (
              <Col xs={8} xl={3}>
                <TechCard
                  key={item}
                  src={item.src}
                  alt={item.title}
                  title={item.title}
                />
              </Col>
            );
          })}
        </Row>
      </article>
      <article className="tools-used"></article>
    </div>
  );
}

export default AboutMe;
