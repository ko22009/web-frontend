import { Table } from "react-bootstrap";
import "./PermissionTabContent.css";
import Pill from "@/Components/Permissions/Pill";

export default function PermissionTabRole() {
  return (
    <Table
      data-toggle="table"
      responsive
      size={"sm"}
      bordered
      className={"permissionTabTable active-first"}
    >
      <thead>
        <tr>
          <th className={"fixed-column"} />
          <th>User</th>
          <th>Manager</th>
          <th>Admin</th>
          <th>Another</th>
          <th>Another one</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={"fixed-column"}>Заимствует</td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"-"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"User"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"User"} />
                <Pill state={"inherit"} name={"Manager"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"User"} />
                <Pill state={"inherit"} name={"Manager"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"User"} />
                <Pill state={"inherit"} name={"Manager"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
        </tr>
        <tr>
          <th className={"fixed-column"}>Пользователи</th>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"create"} />
                <Pill state={"inherit"} name={"read"} />
                <Pill state={"inherit"} name={"update"} />
                <Pill state={"inherit"} name={"delete"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"create"} />
                <Pill state={"inherit"} name={"read"} />
                <Pill state={"inherit"} name={"update"} />
                <Pill state={"inherit"} name={"delete"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"create"} />
                <Pill state={"inherit"} name={"read"} />
                <Pill state={"inherit"} name={"update"} />
                <Pill state={"inherit"} name={"delete"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"create"} />
                <Pill state={"inherit"} name={"read"} />
                <Pill state={"inherit"} name={"update"} />
                <Pill state={"inherit"} name={"delete"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
          <td>
            <div className={"section"}>
              <div>
                <Pill state={"inherit"} name={"create"} />
                <Pill state={"inherit"} name={"read"} />
                <Pill state={"inherit"} name={"update"} />
                <Pill state={"inherit"} name={"delete"} />
              </div>
              <span className="ml-1 permission-add">+</span>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
