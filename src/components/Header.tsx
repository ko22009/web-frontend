import { Link, useLocation } from "react-router-dom";

const paths = [
  {
    title: "Home",
    url: "",
  },
  {
    title: "Private",
    url: "/private",
  },
  {
    title: "Examples",
    url: "/examples",
  },
];

const Header = () => {
  const location = useLocation();
  const url = location.pathname.replace(/\?.*$/, "").replace(/\/$/, "");
  const indexSelect = paths.findIndex((path) => path.url === url);
  return (
    <ul>
      {paths.map((path, i) => {
        return (
          <li key={i} className={`${indexSelect === i ? "active" : ""}`}>
            <Link to={path.url}>{path.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Header;
