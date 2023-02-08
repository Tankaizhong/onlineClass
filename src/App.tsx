import React from "react";
import routes from "./router/routes";
import { useRoutes } from "react-router-dom";
import { ConfigProvider, theme } from "antd"; //修改主题
import { colorPr as colorPrimary } from "./styles/Theme";
import "animate.css"; //动画库
// import lottie from "lottie-web";
// window.lottie = lottie;
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
        },
        algorithm: theme.compactAlgorithm,
      }}
    >
      <div className="App">{useRoutes(routes)}</div>
    </ConfigProvider>
  );
}

export default App;
