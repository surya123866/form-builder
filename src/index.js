import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Correct import for Provider
import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
