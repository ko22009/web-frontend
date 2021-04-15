import "@/scss/App.scss";
import React from "react";
import routes from "@/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact
              path={route.path}
              render={(props) =>
                route.component && <route.component {...props} />
              }
            />
          ))}
        </Switch>
      </Router>
    );
  }
}
