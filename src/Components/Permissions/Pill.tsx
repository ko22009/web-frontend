import { Badge } from "react-bootstrap";
import { kind } from "@/services/Permissions/operation";
import "./pill.css";

type Props = {
  name: string;
  state: string;
};

export default function Pill(props: Props) {
  function getState(state: string) {
    return kind[state].variant;
  }
  return (
    <Badge className={"ml-1 operation"} variant={getState(props.state)}>
      {props.name}
    </Badge>
  );
}
