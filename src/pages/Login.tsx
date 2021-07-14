import GridItem from "@/components/layout/GridItem";
import Grid from "@/components/layout/Grid";
import Main from "@/pages/Main";
import React, { FormEvent, useState } from "react";
const userService = require("@/services/userService");

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await userService.login(username, password);
    console.log(token);
  };

  return (
    <Grid wrapped>
      <GridItem gap>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </GridItem>
    </Grid>
  );
}

export default Main(Login);
