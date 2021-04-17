import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import Examples from "@/pages/examples/Examples";
import Example from "@/pages/examples/Example";
import { CustomSwitch } from "@/routes";

function Index(route: RouteComponentProps) {
  return (
    <CustomSwitch>
      <Route exact path={`${route.match.path}`} component={Examples} />
      <Route exact path={`${route.match.path}/:id`} component={Example} />
    </CustomSwitch>
  );
}

export default Index;
