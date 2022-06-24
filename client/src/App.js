import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import Home from "./Home";
import NewUserForm from "./NewUserForm";
import ShoppingCart from "./ShoppingCart";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import About from "./About";
import Logout from "./Logout";
import { Box } from "@mui/material";
function App() {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState(false);
  const [cart, setCart] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUsername(user);
        });
      }
    });

    fetch("/items")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  function handlePost(obj) {
    fetch("/productions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setItems([...items, data]);
        }
      });
  }

  // Reroute user to <Login /> Component if not authenticated
  if (!isAuthenticated)
    return (
      <>
        <NavBar />
        <Login
          error={"please login"}
          setIsAuthenticated={setIsAuthenticated}
          setUsername={setUsername}
          username={username}
        />
        <Box display="flex" justifyContent="center" alignItems="auto">
          {" "}
          New user? Sign up today
        </Box>
        <NewUserForm />
      </>
    );
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<Home username={username} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Signup" element={<NewUserForm />}></Route>
        <Route
          path="/ShoppingCart"
          element={<ShoppingCart username={username} />}
        ></Route>
        <Route
          path="/Logout"
          element={
            <Logout
              setIsAuthenticated={setIsAuthenticated}
              setUsername={setUsername}
              username={username}
            />
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
