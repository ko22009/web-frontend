import "@/App.scss";
import React from "react";
import routes from "@/routes";
import Header from "@/components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

type Props = {};

export default class App extends React.Component<Props> {
  preventDefaults(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }
  constructor(props: Props) {
    super(props);
    this.preventDefaults = this.preventDefaults.bind(this);
  }
  componentDidMount() {
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      document.addEventListener(eventName, (event) =>
        this.preventDefaults(event)
      );
    });
  }
  render() {
    return (
      <Router>
        <Header />
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
        <footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </footer>
      </Router>
    );
  }
}
