import axios from "axios";
import GridItem from "@/components/layout/GridItem";
import Grid from "@/components/layout/Grid";

export default function Private() {
  axios.get("/private");
  return (
    <Grid wrapped>
      <GridItem gap>
        <h1>Private page</h1>
      </GridItem>
    </Grid>
  );
}
