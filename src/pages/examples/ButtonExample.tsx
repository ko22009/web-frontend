import Grid from "@/components/layout/Grid";
import GridItem from "@/components/layout/GridItem";
import Button from "@/components/Button";
import React from "react";

function ButtonExample() {
  return (
    <>
      <h4>Buttons</h4>
      <Grid columnGap="10px" rowGap="10px" gridTemplateColumns="repeat(7, 1fr)">
        <Button>Button</Button>
        <Button inverted>Button</Button>
        <Button disabled>Button</Button>
        <Button variant="danger">Button</Button>
        <Button inverted variant="danger">
          Button
        </Button>
        <Button variant="warning">Button</Button>
        <Button inverted variant="warning">
          Button
        </Button>
        <Button variant="success">Button</Button>
        <Button inverted variant="success">
          Button
        </Button>
      </Grid>
    </>
  );
}

export default ButtonExample;
