import React from "react";

import ProductPage from "./ProductPage";
import { Grid } from "@mui/material";
function Home({ username }) {
  return (
    <div>
      <ProductPage username={username} />
    </div>
  );
}

export default Home;
