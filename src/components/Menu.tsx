import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CSSProperties, MouseEventHandler } from "react";

export interface PathItem {
  title: any;
  url?: string;
  float?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  exact?: boolean;
}

type Props = {
  paths: PathItem[];
};

const Menu = styled.ul``;

const MenuItem = styled.ul`
  float: left;
`;

const textWhite = "#fff";
const activeBlue = "#008cba";

const linkStyles = `display: inline-block;
  text-decoration: none;
  padding: 15px 16px;
  color: inherit;
  &.active {
      color: ${textWhite};
      background-color: ${activeBlue};
  }`;

const Link = styled.a`
  ${linkStyles}
`;

const StyledNavLink = styled(NavLink)`
  ${linkStyles}
`;

function menu(props: Props) {
  const output = props.paths.map((path, i) => {
    const float = { float: path.float ?? "" } as CSSProperties;
    return (
      <MenuItem key={i} style={float}>
        {(path.url !== undefined && (
          <StyledNavLink
            exact={path.exact}
            activeClassName="active"
            to={path.url}
          >
            {path.title}
          </StyledNavLink>
        )) || (
          <Link href="#" onClick={path.onClick}>
            {path.title}
          </Link>
        )}
      </MenuItem>
    );
  });
  return <Menu>{output}</Menu>;
}

export default menu;
