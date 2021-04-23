import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import Examples from "@/pages/examples/Examples";
import { CustomSwitch } from "@/utils/routes";

function Index(route: RouteComponentProps) {
  return (
    <CustomSwitch>
      <Route exact path={`${route.match.path}`} component={Examples} />
    </CustomSwitch>
  );
}

export default Index;
