import React from "react";
import { CustomSwitch } from "@/utils/routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Examples from "@/pages/examples";
import Private from "@/pages/Private";
import GlobalStyles from "@/styled/GlobalStyles";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <CustomSwitch>
          <Route exact path="/" component={Home} />
          <Route path="/examples" component={Examples} />
          <Route path="/private" component={Private} />
        </CustomSwitch>
      </Router>
    );
  }
}
