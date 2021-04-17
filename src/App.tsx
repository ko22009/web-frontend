import "@/scss/App.scss";
import React from "react";
import routes, { CustomSwitch } from "@/routes";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <CustomSwitch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </CustomSwitch>
      </Router>
    );
  }
}
