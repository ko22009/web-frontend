import PermissionTabContent from "@/Pages/PermissionTabContent";
import PermissionTabRole from "@/Pages/PermissionTabRole";
import { Nav, TabContent, TabPane } from "react-bootstrap";
import { useState } from "react";

export default function Permissions() {
  const [tab, setTab] = useState(0);
  const activeClass = (number: number) => (tab === number ? "active" : "");
  return (
    <div>
      <h1>Permissions</h1>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link className={activeClass(0)} onClick={() => setTab(0)}>
            Role
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={activeClass(1)} onClick={() => setTab(1)}>
            User
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent className={"pt-4"}>
        <TabPane className={activeClass(0)}>
          <PermissionTabRole />
        </TabPane>
        <TabPane className={activeClass(1)}>
          <PermissionTabContent />
        </TabPane>
      </TabContent>
    </div>
  );
}
