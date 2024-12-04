import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeSelect } from "./components/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeSelect>
      <App />
    </ThemeSelect>
  </React.StrictMode>
);
