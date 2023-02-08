import { Navigate } from "react-router";
// 登录 / 注册
import Login from "../components/Login/Login";
import NoFound from "../views/NoFound/NoFound";
import Loginandregister from "../views/Loginandregister/Loginandregister";
import Register from "../components/Register/Register";
// 首页
import Maincontent from "../components/Maincontent/Main/Maincontent";
const routes = [
  {
    path: "/",
    element: <Navigate to="/Maincontent" />,
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
  //首页
  {
    path: "Maincontent",
    element: <Maincontent />,
  },
  {
    path: "*",
    element: <NoFound />,
  },
];
export default routes;
