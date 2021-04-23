import Grid from "@/components/layout/Grid";
import GridItem from "@/components/layout/GridItem";
import image from "@/pages/examples/image.jpg";
import colors from "@/styled/global/colors";
import Button from "@/components/Button";
import React from "react";
import Image from "@/components/Image";

function ImageExample() {
  return (
    <>
      <h4>Image</h4>
      <Grid columnGap="20px" rowGap="20px" gridTemplateColumns="1fr 1fr">
        <GridItem style={{ position: "relative" }}>
          <Image src={image} />
          <div
            style={{
              position: "absolute",
              left: "0",
              right: 0,
              bottom: "0",
              padding: "10px",
              background: colors.white,
              border: `1px solid ${colors.gray}`,
            }}
          >
            <Button inverted>Button</Button>
          </div>
        </GridItem>
        <GridItem>
          <Image src={image} />
        </GridItem>
        <GridItem>
          <Image src={image} />
        </GridItem>
      </Grid>
    </>
  );
}

export default ImageExample;
