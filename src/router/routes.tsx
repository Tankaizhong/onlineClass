import Login from "../views/Login/Login";
import NoFound from "../views/NoFound/NoFound";
import { Navigate } from "react-router";
const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NoFound />,
  },
];
export default routes;
