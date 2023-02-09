import React from "react";
import { Breadcrumb, Layout, theme, Menu, MenuProps, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Index.css";
import { useRoutes } from "react-router-dom";
import useRouter from "../../utils/useRouter";
import routes from "../../router/routes";
const { Header, Content, Footer } = Layout;

export default function Index() {
  const { go, getUrl } = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //头部标签列表
  const items = [
    {
      key: "/main",
      label: "首页",
    },
    {
      key: "/hotCourse",
      label: "热门课程",
    },
    {
      key: "/newCourse",
      label: "上新课程",
    },
  ];
  const choose = ({ item, key }: { [key: string]: any }) => {
    go(key);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "middle",
          zIndex: 1,
          top: 0,
          backgroundColor: "#ffff",
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["/main"]}
          items={items}
          style={{ width: "300px" }}
          onSelect={choose}
        />
        <div className="icone-header">
          <Avatar
            style={{
              backgroundColor: "#87d068",
              position: "sticky",
              
            }}
            icon={<UserOutlined />}
          />
          谭凯中
        </div>
      </Header>

      <Content
        className="site-layout"
        style={{ padding: "0 50px", position: "relative", height: "800px" }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div className="main-content"> {useRoutes(routes)} </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
