import { Alert } from "@mui/material";
import React, { useState } from "react";

function Auth() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState();

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,

      password,
    };

    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.errors) setErrors(json.errors);
      });
    setUsername("");
    setPassword("");
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Sign up!" />
      </form>
      {errors ? <Alert>{errors}</Alert> : null}
    </>
  );
}

export default Auth;
