import React from "react";

import { Paper, IconButton, ActionHome } from "@mui/material";

// import IconButton from "material-ui/IconButton";
// import ActionHome from "material-ui/svg-icons/action/home";

export default function About() {
  const styles = {
    paperContainer: {
      backgroundImage: `url("https://cf.ltkcdn.net/garden/images/orig/215122-2123x1412-gardengreenhouse.jpg")`,
    },
  };

  return (
    <Paper style={styles.paperContainer}>
      Some text to fill the About Component
    </Paper>
  );
}
