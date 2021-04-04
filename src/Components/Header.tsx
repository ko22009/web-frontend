import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink
          className={"navbar-brand"}
          exact={true}
          activeClassName="active"
          to="/"
        >
          React-Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink
                className={"nav-link"}
                exact={true}
                activeClassName="active"
                to="/examples"
              >
                Examples
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={"nav-link"}
                exact={true}
                activeClassName="active"
                to="/private"
              >
                Private
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={"nav-link"}
                exact={true}
                activeClassName="active"
                to="/permissions"
              >
                Permissions
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={"nav-link"}
                exact={true}
                activeClassName="active"
                to="/login"
              >
                Login
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={"nav-link"}
                exact={true}
                activeClassName="active"
                to="/register"
              >
                Register
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={"nav-link"}
                exact={true}
                activeClassName="active"
                to="/logout"
              >
                Logout
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
