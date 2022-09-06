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
        <Row gutter={[48, 48]}>
          {items.map((item) => {
            return (
              <Col xs={24} xl={12}>
                <ProjectCard
                  key={item.title}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  description={item.description}
                  href={item.href}
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
