import { Card, Button } from "antd";
import React from "react";
import "./card.css";

const { Meta } = Card;

function ProjectCard({
  src,
  alt,
  title,
  description,
  hrefBack,
  key,
  hrefFront,
  hrefApp,
  techStack,
}) {
  return (
    <Card
      hoverable
      className="custom-card"
      cover={<img alt={alt} src={src} />}
      actions={[
        <Button href={hrefFront} type="primary" shape="round">
          Frontend
        </Button>,
        <Button href={hrefBack} type="primary" shape="round">
          Backend
        </Button>,
        <Button href={hrefApp} type="primary" shape="round">
          App
        </Button>,
      ]}
    >
      <Meta key={key} title={title} description={description} />
      <br /> {techStack}
    </Card>
  );
}

export default ProjectCard;
