import { RouteProps } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";

export interface SubRouteProps extends RouteProps {
  routes?: RouteProps[];
}

const routes: SubRouteProps[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
