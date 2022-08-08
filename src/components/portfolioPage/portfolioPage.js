import ProjectCard from "./card/card";
import "./portfolioPage.css";
import { Col, Row } from "antd";
import { items } from "../../libs/projectItems";

function PortfolioPage() {
  return (
    <div className="portfolio-page-container" id="portfolio-page-container">
      <h1>Here is a selection of the projects I have worked on</h1>
      <Row gutter={[48, 48]}>
        {items.map((item) => {
          return (
            <Col xs={24} xl={12}>
              <ProjectCard
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
    </div>
  );
}

export default PortfolioPage;
