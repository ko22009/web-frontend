import "@/scss/App.scss";
import React from "react";
import routes from "@/routes";
import Header from "@/components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@/components/layout/Grid";
import GridItem from "@/components/layout/GridItem";

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
      <Grid direction={"vertical"} gridTemplateRows="auto 1fr auto">
        <Router>
          <GridItem>
            <Header />
          </GridItem>
          <GridItem>
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
          </GridItem>
          <GridItem className="gray-bg">
            <Grid wrapped>
              <footer style={{ textAlign: "center", padding: "20px" }}>
                Ant Design ©2018 Created by Ant UED
              </footer>
            </Grid>
          </GridItem>
        </Router>
      </Grid>
    );
  }
}
