import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
function Logout({ setIsAuthenticated, setUsername, username }) {
  fetch("/logout", {
    method: "DELETE",
  }).then(() => {
    setIsAuthenticated(false);
    setUsername(null);
  });
}

export default Logout;
