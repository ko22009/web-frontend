import Grid from "@/components/layout/Grid";
import GridItem from "@/components/layout/GridItem";
import Button from "@/components/Button";
import React from "react";

function ButtonExample() {
  return (
    <>
      <h4>Buttons</h4>
      <Grid columnGap="20px" direction="horizontal">
        <GridItem>
          <Button>Button</Button> <Button inverted>Button</Button>{" "}
          <Button disabled>Button</Button>{" "}
          <Button variant="danger">Button</Button>{" "}
          <Button inverted variant="danger">
            Button
          </Button>{" "}
          <Button variant="warning">Button</Button>{" "}
          <Button inverted variant="warning">
            Button
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}

export default ButtonExample;
