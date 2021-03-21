import axios from "axios";
import store from "@/store";
import { auth } from "@/store/user";

export async function login(login: string, password: string) {
  try {
    return await axios.post("/login", { login, password }).then((response) => {
      store.dispatch(auth(response.data));
      return response.data;
    });
  } catch (error) {
    return error;
  }
}
