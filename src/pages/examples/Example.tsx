import GridItem from "@/components/layout/GridItem";
import Grid from "@/components/layout/Grid";
import Main from "@/pages/Main";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { topLink } from "@/utils/routes";

function Example(route: RouteComponentProps) {
  return (
    <Grid wrapped>
      <GridItem gap>
        <div>Example #1 Page</div>
        <button onClick={() => route.history.push(topLink(route))}>
          Go Back
        </button>
      </GridItem>
    </Grid>
  );
}

export default Main(Example);
