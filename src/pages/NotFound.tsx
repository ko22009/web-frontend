import GridItem from "@/components/layout/GridItem";
import Grid from "@/components/layout/Grid";
import Main from "@/pages/Main";

function NotFound() {
  return (
    <Grid wrapped>
      <GridItem gap>
        <div>Not found - 404</div>
      </GridItem>
    </Grid>
  );
}

export default Main(NotFound);
