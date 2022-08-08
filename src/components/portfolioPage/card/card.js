import { Card } from "antd";
import React from "react";
import "./card.css";

const { Meta } = Card;

function ProjectCard({ src, alt, title, description, href }) {
  return (
    <a href={href}>
      <Card
        hoverable
        className="custom-card"
        cover={<img alt={alt} src={src} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </a>
  );
}

export default ProjectCard;
