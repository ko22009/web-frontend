import { RouteProps } from "react-router";
import Home from "@/pages/Home";
import Private from "@/pages/Private";
import Examples from "@/pages/examples";
import NotFound from "@/pages/NotFound";

export interface SubRouteProps extends RouteProps {
  routes?: RouteProps[];
}

const routes: SubRouteProps[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/examples",
    component: Examples,
  },
  {
    path: "/private",
    component: Private,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
