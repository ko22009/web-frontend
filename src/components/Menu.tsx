import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { CSSProperties, MouseEventHandler } from "react";

export interface PathItem {
  title: any;
  url?: string;
  float?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  openInNewWindow?: boolean;
}

type Props = {
  paths: PathItem[];
};

const Menu = (props: Props) => {
  const output = props.paths.map((path, i) => {
    const float = { float: path.float ?? "" } as CSSProperties;
    return (
      <li key={i} style={float}>
        {(path.url !== undefined && (
          <NavLink
            target={path.openInNewWindow ? "_blank" : ""}
            exact
            activeClassName="active"
            to={path.url}
          >
            {path.title}
          </NavLink>
        )) || (
          <a href="#" onClick={path.onClick}>
            {path.title}
          </a>
        )}
      </li>
    );
  });
  return <ul className="menu">{output}</ul>;
};

export default Menu;
