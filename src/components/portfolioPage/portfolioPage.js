import ProjectCard from "./card/card";
import "./portfolioPage.css";
import { Col, Row } from "antd";
import { items } from "../../libs/projectItems";
import EaseInBottom from "../framerAnimation/easeInBottom";

function PortfolioPage() {
  return (
    <div className="portfolio-page-container" id="portfolio-page-container">
      <EaseInBottom>
        <h1>Here is a selection of the projects I have worked on</h1>
        <Row gutter={[24, 24]}>
          {items.map((item) => {
            return (
              <Col xs={24} xl={12}>
                <ProjectCard
                  key={item.title}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  description={item.description}
                  hrefFront={item.hrefFront}
                  hrefBack={item.hrefBack}
                  hrefApp={item.hrefApp}
                  techStack={item.techStack}
                  backend={item.backend}
                  app={item.app}
                  frontend={item.frontend}
                />
              </Col>
            );
          })}
        </Row>
      </EaseInBottom>
    </div>
  );
}

export default PortfolioPage;
