import { Card } from "antd";
import React from "react";

const { Meta } = Card;

function ProjectCard({ src, alt, title, description }) {
  return (
    <Card
      hoverable
      style={{ width: 280, borderRadius: "15px" }}
      cover={<img alt={alt} src={src} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}

export default ProjectCard;
