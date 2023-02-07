import React from "react";
import routes from "./router/routes";
import { useRoutes } from "react-router-dom";
function App() {
  return <div className="App">{useRoutes(routes)}</div>;
}

export default App;
