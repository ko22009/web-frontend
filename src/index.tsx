import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import axios from "axios";
import { Provider } from "react-redux";
import store from "@/store";
import { token } from "@/store/user";

declare global {
  interface Window {
    axios: any;
    store: any;
  }
}

window.axios = axios || {};
window.store = store || {};

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.authorization = token;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
