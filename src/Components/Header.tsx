import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink
                className={"nav-link"}
                exact={true}
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={"nav-link"}
                exact={true}
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
