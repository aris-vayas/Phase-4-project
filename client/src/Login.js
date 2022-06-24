import React, { useState } from "react";
import { Alert, Grid, Input, Box, Button } from "@mui/material";
import Auth from "./NewUserForm";
function Login({ setUsername, setIsAuthenticated, username }) {
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState();

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password,
    };

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUsername(user);
          setIsAuthenticated(true);
        });
        setUsername("");
        setPassword("");
      } else {
        res.json().then((json) => setErrors(json.errors));
      }

      setUsername("");
      setPassword("");
    });
  }

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="auto">
        <form justifyContent="center">
          MUST SIGN IN TO CONTINUE
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Input
                type="text"
                value={username}
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Login!
        </Button>
      </Box>
      {errors ? <Alert>{errors}</Alert> : null}
      {/* <Auth setUser={setUser} setIsAuthenticated={setUser} /> */}
    </>
  );
}

export default Login;
