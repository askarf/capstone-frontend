import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Provider } from "@lyket/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider apiKey="pt_f4c8f116612d7281566c3176f2c6b6"> */}
    <App />
    {/* </Provider> */},
  </React.StrictMode>
);
