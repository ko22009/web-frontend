import { RouteProps } from "react-router";
import Home from "@/Pages/Home";
import Private from "@/Pages/Private";
import Examples from "@/Pages/Examples";
import NotFound from "@/Pages/NotFound";

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
