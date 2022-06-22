import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({ name, image, description }) {
  function handleBuyButton() {
    console.log("buy button clicked");
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="300" image={image} alt="plant" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleBuyButton} variant="contained" size="small">
          BUY
        </Button>
        {/* <Button variant="contained" size="small">
          RATE{" "}
        </Button> */}
      </CardActions>
    </Card>
  );
}
