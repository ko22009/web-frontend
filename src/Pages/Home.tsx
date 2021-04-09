import DragAndDrop from "@/components/DragAndDrop";
import GridItem from "@/components/layout/GridItem";
import Grid from "@/components/layout/Grid";

export default function Home() {
  return (
    <Grid wrapped>
      <GridItem gap>
        <DragAndDrop />
      </GridItem>
    </Grid>
  );
}
