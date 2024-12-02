import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>헬로우 리액트!</h1>;
};

const Banner = () => {
  return <h1>광고!</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Banner />
  </React.StrictMode>
);
