import GridItem from "@/components/layout/GridItem";
import Grid from "@/components/layout/Grid";
import Main from "@/pages/Main";
import { NavLink } from "react-router-dom";
import React from "react";

function Examples() {
  return (
    <Grid wrapped>
      <GridItem gap>
        <div>Example Pages</div>
        <NavLink to="/examples/1">1</NavLink>
      </GridItem>
    </Grid>
  );
}

export default Main(Examples);
