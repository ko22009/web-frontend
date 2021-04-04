import Pill from "@/Components/Permissions/Pill";
import "./operations.css";

export default function operations() {
  return (
    <div className={"section"}>
      <div>
        <Pill state={"inherit"} name={"create"} />
        <Pill state={"inherit"} name={"read"} />
        <Pill state={"inherit"} name={"update"} />
        <Pill state={"inherit"} name={"delete"} />
      </div>
      <span className="ml-1 action">+</span>
    </div>
  );
}
