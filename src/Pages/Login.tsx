import { Button, Form } from "react-bootstrap";
import { login } from "@/services/userService";
import React from "react";

type Props = {};
type State = {
  login: string;
  password: string;
};

export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    login(this.state.login, this.state.password);
  }
  render() {
    return (
      <div>
        <h2 className={"mt-3"}>Authorization</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter login"
              value={this.state.login}
              onChange={(e) =>
                this.setState({
                  login: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) =>
                this.setState({
                  password: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Button onClick={this.onClick} variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
