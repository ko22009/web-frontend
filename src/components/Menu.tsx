import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";

export interface PathItem {
  title: string;
  url: string;
}

export enum MenuDirection {
  horizontal,
  vertical,
}

type Props = {
  paths: PathItem[];
  direction?: keyof typeof MenuDirection;
};

const Menu = (props: Props) => {
  const location = useLocation();
  const url = location.pathname.replace(/\?.*$/, "").replace(/\/$/, "");
  const indexSelect = props.paths.findIndex((path) => path.url === url);
  const className = [
    "menu",
    `menu-${
      props.direction
        ? props.direction
        : MenuDirection[MenuDirection.horizontal]
    }`,
  ].join(" ");
  const classNameLink = (i: number) => {
    return ["gray", indexSelect === i ? "active" : ""].join(" ");
  };
  return (
    <ul className={className}>
      {props.paths.map((path, i) => {
        return (
          <li key={i}>
            <Link className={classNameLink(i)} to={path.url}>
              {path.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
