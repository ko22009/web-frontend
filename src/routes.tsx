import { RouteProps, SwitchProps } from "react-router";
import Home from "@/pages/Home";
import Private from "@/pages/Private";
import NotFound from "@/pages/NotFound";
import Examples from "@/pages/examples";
import Main from "@/pages/Main";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

const NotFoundComponent = Main(NotFound);

export function CustomSwitch(props: SwitchProps) {
  return (
    <Switch>
      {props.children}
      <Route path="*" component={NotFoundComponent} />
    </Switch>
  );
}

export function topLink(
  route: RouteComponentProps<{ [index: string]: string }>
) {
  const params = route.match.params;
  let path = route.match.path.replace(/(.+)([:].*)$/, "$1");
  for (let param in params) {
    path = path.replace(`:${param}`, params[param]);
  }
  return path;
}

const routes: RouteProps[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/examples",
    component: Examples,
  },
  {
    path: "/private",
    component: Private,
  },
];

export default routes;
