import DragAndDrop from "@/components/DragAndDrop";
import GridItem from "@/components/layout/GridItem";
import Grid from "@/components/layout/Grid";
import Main from "@/pages/Main";

function Home() {
  return (
    <Grid wrapped>
      <GridItem gap>
        <h1>Hello world</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <DragAndDrop />
      </GridItem>
    </Grid>
  );
}

export default Main(Home);
