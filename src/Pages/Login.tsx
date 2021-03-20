import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { auth } from "../reducers/user";

export default function Login() {
  const dispatch = useDispatch();
  function onClick() {
    dispatch(auth());
  }
  return (
    <div>
      <h2 className={"mt-3"}>Authorization</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={onClick} variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
