import Grid from "@/components/layout/Grid";
import Main from "@/pages/Main";
import React from "react";
import ButtonExample from "@/pages/examples/ButtonExample";
import ImageExample from "@/pages/examples/ImageExample";
import TextExample from "@/pages/examples/TextExample";
import { Gap } from "@/components/Gap";

function Examples() {
  return (
    <Grid style={{ marginTop: "20px" }} wrapped>
      <ButtonExample />
      <Gap />
      <ImageExample />
      <Gap />
      <TextExample />
    </Grid>
  );
}

export default Main(Examples);
