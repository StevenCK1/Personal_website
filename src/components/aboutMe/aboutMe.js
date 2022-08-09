import "./aboutMe.css";
import { Col, Row } from "antd";

import TechCard from "./techCard/techCard";
import css from "../../images/css.png";
import cypress from "../../images/cypress.png";
import express from "../../images/express.png";
import figma from "../../images/figma.png";
import git from "../../images/git.png";
import github from "../../images/github.png";
import heroku from "../../images/heroku.png";
import html from "../../images/html.png";
import javascript from "../../images/javascript.png";
import jest from "../../images/jest.png";
import jira from "../../images/jira.png";
import netlify from "../../images/netlify.png";
import nextjs from "../../images/Nextjs.png";
import nodejs from "../../images/nodejs.png";
import postgresql from "../../images/postgresql.png";
import postman from "../../images/postman.png";
import pwa from "../../images/pwa.png";
import reactlogo from "../../images/react.png";
import typescript from "../../images/typescript.png";

const techSkills = [
  { src: reactlogo, title: "React" },
  { src: javascript, title: "JavaScript" },
  { src: css, title: "CSS" },
  { src: html, title: "HTML" },
  { src: git, title: "Git" },
  { src: github, title: "Github" },
  { src: postgresql, title: "PostgreSQL" },
  { src: jest, title: "Jest" },
  { src: netlify, title: "Netlify" },
  { src: nodejs, title: "NodeJS" },
  { src: express, title: "Express" },
  { src: heroku, title: "Heroku" },
  { src: nextjs, title: "NextJS" },
  { src: postman, title: "Postman" },
  { src: jira, title: "Jira" },
  { src: pwa, title: "PWA" },
  { src: typescript, title: "TypeScript" },
  { src: cypress, title: "Cypress" },
  { src: figma, title: "Figma" },
];

function AboutMe() {
  return (
    <div className="about-me-page-container" id="about-me-page-container">
      <h1>A little bit about me</h1>
      <article className="little-about-me"></article>
      <article className="tech-skills">
        <Row gutter={[24, 24]}>
          {techSkills.map((item) => {
            return (
              <Col xs={6} xl={2}>
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
