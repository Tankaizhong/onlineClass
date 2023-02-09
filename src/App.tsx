import React from "react";
import { ConfigProvider, theme } from "antd"; //修改主题
import { colorPr as colorPrimary, colorBgContainer } from "./styles/Theme";
import "animate.css"; //动画库
import Home from "./components/Home/Index";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary, //品牌主题
          colorBgContainer, //组件容器背景色
        },
        algorithm: theme.compactAlgorithm,
      }}
    >
      <div className="App">
        <Home />
      </div>
    </ConfigProvider>
  );
}

export default App;
