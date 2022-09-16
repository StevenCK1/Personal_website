import { Card, Button } from "antd";
import React, { useState } from "react";
import "./card.css";

const tabList = [
  {
    key: "Summary",
    tab: "Summary",
  },
  {
    key: "Details",
    tab: "More details",
  },
];

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
  backend,
  app,
  frontend,
  details1,
  details2,
  details3,
}) {
  const [activeTabKey, setActiveTabKey] = useState("Summary");
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const contentList = {
    Summary: [
      <p className="card-title">{title}</p>,
      <p>{details1}</p>,
      <p>{details2}</p>,
      <p>{details3}</p>,
    ],
    Details: [<p>{description}</p>, <p>{techStack}</p>],
  };

  return (
    <Card
      hoverable
      className="custom-card"
      cover={<img alt={alt} src={src} />}
      actions={[
        <Button href={hrefFront} type="primary" shape="round">
          {frontend}
        </Button>,
        <Button href={hrefBack} type="primary" shape="round">
          {backend}
        </Button>,
        <Button href={hrefApp} type="primary" shape="round">
          {app}
        </Button>,
      ]}
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={(key) => {
        onTabChange(key);
      }}
    >
      {contentList[activeTabKey]}
    </Card>
  );
}

export default ProjectCard;
