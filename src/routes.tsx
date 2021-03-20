import { RouteProps } from "react-router";
import Home from "@/Pages/Home";
import About from "@/Pages/About";
import Login from "@/Pages/Login";
import Register from "@/Pages/Register";

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
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

export default routes;
