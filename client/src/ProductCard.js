import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({
  name,
  image_url,
  description,
  id,
  username,
}) {
  function handleBuyButton() {
    console.log(username);
    const obj = {
      item_id: id,
      cart_id: username.id,
    };
    const cartObj = {
      cart_number: username.id,
      user_id: username.id,
    };
    // fetch("/carts", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(cartObj),
    // }).then((res) => res.json());

    fetch("/order_items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }).then((res) => res.json());
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="300" image={image_url} alt="plant" />
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
          Add to Cart
        </Button>
        {/* <Button variant="contained" size="small">
          RATE{" "}
        </Button> */}
      </CardActions>
    </Card>
  );
}
