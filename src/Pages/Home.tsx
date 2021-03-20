import DragAndDrop from "@/Components/DragAndDrop";
import { Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Row>
      <Col>
        <div className="pb-4" />
        <DragAndDrop />
      </Col>
    </Row>
  );
}
