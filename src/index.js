import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import "./index.css";
import "./assets/bootstrap-icons/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
