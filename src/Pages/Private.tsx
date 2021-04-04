import axios from "axios";

export default function Private() {
  axios.get("/private");
  return <h1>Private page</h1>;
}
