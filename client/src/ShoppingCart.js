import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
function ShoppingCart({ items, delItem, username }) {
  const [orderItems, setOrderItems] = useState([]);
  console.log(username.id);

  useEffect(() => {
    fetch(`order_items`)
      .then((res) => res.json())
      .then((data) => setOrderItems(data));
  }, []);
  console.log(orderItems);
  // const plants = [
  //   {
  //     name: "Ageratum",
  //     image:
  //       "https://www.gardeningknowhow.com/wp-content/uploads/2020/06/ageratum.jpg",
  //     description: "Ageratum is a super cool plant that is used for x, y, z",
  //   },
  //   {
  //     name: "Dracaena",
  //     image:
  //       "https://plantsnflora.com/wp-content/uploads/2021/06/Plantsnflora-Sansevieria-Trifasciata-Snake-Plant-var.-laurentii.png",
  //     description: "Dracaena is the weirdest plant I know",
  //   },
  //   {
  //     name: "American Marigold",
  //     image:
  //       "https://www.brooksidenursery.co.uk/media/catalog/product/cache/2be6b7d2f1efc1891b21b74af0ca37fe/2/6/260076a.jpg",
  //     description: "American Marigold is orange",
  //   },
  //   {
  //     name: "Annual Vinca",
  //     image:
  //       "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F02%2Fcatharanthus-tropical-rose-vinca-768f2e2c.jpg",
  //     description: "Annual Vinca is the most expensive plant we have",
  //   },
  //   {
  //     name: "Bacopa",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/f/f0/Starr_070815-8055_Bacopa_monnieri.jpg",
  //     description: "Bacopa is a white plant",
  //   },
  // ];
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {orderItems.map((plant) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={plant.item.image_url}
                alt="plant"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {plant.item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plant.item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default ShoppingCart;
