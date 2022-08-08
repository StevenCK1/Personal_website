import ProjectCard from "./card/card";
import "./portfolioPage.css";

function PortfolioPage() {
  return (
    <div className="portfolio-page-container" id="portfolio-page-container">
      <h1>This is the portfolio-page section</h1>
      <ProjectCard />
    </div>
  );
}

export default PortfolioPage;
