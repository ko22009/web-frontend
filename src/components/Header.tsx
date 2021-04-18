import Menu, { PathItem } from "@/components/Menu";
import GridItem from "@/components/layout/GridItem";
import Grid from "@/components/layout/Grid";

const paths: PathItem[] = [
  {
    title: "Home",
    url: "/",
    exact: true,
  },
  {
    title: "Private",
    url: "/private",
  },
  {
    title: "Examples",
    url: "/examples",
  },
  {
    title: <span className="material-icons-outlined">light_mode</span>,
    float: "right",
    onClick: function () {
      document.body.classList.toggle("dark");
    },
  },
];

const Header = () => {
  return (
    <GridItem className="bg-gray">
      <Grid wrapped>
        <Menu paths={paths} />
      </Grid>
    </GridItem>
  );
};

export default Header;
