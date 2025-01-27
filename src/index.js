import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Include your styles if necessary
import App from "./App.jsx"; // Import App.jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
