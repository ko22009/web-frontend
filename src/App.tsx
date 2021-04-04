import "@/App.scss";
import React from "react";
import routes from "@/routes";
import Header from "@/Components/Header";
import { Container } from "react-bootstrap";
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
        <Container className={"p-4"}>
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
        </Container>
      </Router>
    );
  }
}
