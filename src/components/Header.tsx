import Menu, { PathItem } from "@/components/Menu";
import Grid from "@/components/layout/Grid";
import GridItem from "@/components/layout/GridItem";
const paths: PathItem[] = [
  {
    title: "Home",
    url: "",
  },
  {
    title: "Private",
    url: "/private",
  },
  {
    title: "Examples",
    url: "/examples",
  },
];

const Header = () => {
  return (
    <GridItem className="gray-bg">
      <Grid wrapped>
        <Menu paths={paths} />
      </Grid>
    </GridItem>
  );
};

export default Header;
