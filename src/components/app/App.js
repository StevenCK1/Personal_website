import "./App.css";
import { Menu } from "antd";
import {
  HomeOutlined,
  MenuOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import React from "react";
import LandingPage from "../landingPage/landingPage";

const App = () => (
  <React.Fragment>
    {/* Start of navbar */}
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="contact" icon={<ContactsOutlined />}>
        Contact me
      </Menu.Item>
      <Menu.SubMenu key="SubMenu" title="See more" icon={<MenuOutlined />}>
        <Menu.Item key="two">About me</Menu.Item>
        <Menu.Item key="three">Portfolio projects</Menu.Item>
        <Menu.Item key="four">Tech</Menu.Item>
      </Menu.SubMenu>
    </Menu>
    {/* End of navbar */}
    <LandingPage />
  </React.Fragment>
);

export default App;
