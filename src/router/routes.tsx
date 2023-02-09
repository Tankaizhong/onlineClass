import { Navigate } from "react-router";
// 登录 / 注册
import Login from "../components/Login/Login";
import NoFound from "../views/NoFound/NoFound";
import Loginandregister from "../views/Loginandregister/Loginandregister";
import Register from "../components/Register/Register";

import Home from "../components/Home/Index"; // 首页
import Hotcourse from "../components/Course/HotCourse/Hotcourse";
import Main from "../components/Home/Main/Main";
import NewCourse from "../components/Course/NewCourse/NewCourse";

const routes = [
  {
    path: "/",
    element: <Navigate to="/main" />,
  },
  //登录注册
  {
    path: "/loginandregister",
    element: <Loginandregister />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/hotCourse",
    element: <Hotcourse />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/newCourse",
    element: <NewCourse />,
  },
  {
    path: "*",
    element: <NoFound />,
  },
];

export default routes;
