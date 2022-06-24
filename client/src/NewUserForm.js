import { Alert, Box } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Auth({ setUser, setIsAuthenticated }) {
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
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUsername(user);
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
    setUsername("");
    setPassword("");
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="auto">
      <Card justifyContent="center">
        <form onSubmit={onSubmit}>
          <input
            justifyContent="center"
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
      </Card>
    </Box>
  );
}

export default Auth;
