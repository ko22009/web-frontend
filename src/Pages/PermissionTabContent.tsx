import { Table } from "react-bootstrap";
import "./PermissionTabContent.css";
import Pill from "@/Components/Permissions/Pill";

export default function PermissionTabContent() {
  return (
    <Table
      responsive
      size={"sm"}
      bordered
      className={"permissionTabTable active-first"}
    >
      <thead>
        <tr>
          <th />
          <th>Type</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className={"fixed-column"} rowSpan={2}>
            Пользователи
          </th>
          <td>role</td>
          <td>
            <Pill state={"inherit"} name={"user"} />
            <Pill state={"inherit"} name={"manager"} />
          </td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
        </tr>
        <tr>
          <td>user</td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <th className={"fixed-column"} rowSpan={2}>
            Роли
          </th>
          <td>role</td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
        </tr>
        <tr>
          <td>user</td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td>
            <Pill state={"inherit"} name={"create"} />
            <Pill state={"establish"} name={"read"} />
            <Pill state={"establish"} name={"update"} />
            <Pill state={"prune"} name={"delete"} />
          </td>
          <td />
          <td />
        </tr>
      </tbody>
    </Table>
  );
}
