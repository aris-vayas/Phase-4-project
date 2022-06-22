import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
// import ListingCard from "./ListingCard";
function ProductPage({ items, delItem }) {
  const plants = [
    {
      name: "Ageratum",
      image:
        "https://www.gardeningknowhow.com/wp-content/uploads/2020/06/ageratum.jpg",
      description: "Ageratum is a super cool plant that is used for x, y, z",
    },
    {
      name: "Dracaena",
      image:
        "https://plantsnflora.com/wp-content/uploads/2021/06/Plantsnflora-Sansevieria-Trifasciata-Snake-Plant-var.-laurentii.png",
      description: "Dracaena is the weirdest plant I know",
    },
    {
      name: "American Marigold",
      image:
        "https://www.brooksidenursery.co.uk/media/catalog/product/cache/2be6b7d2f1efc1891b21b74af0ca37fe/2/6/260076a.jpg",
      description: "American Marigold is orange",
    },
    {
      name: "Annual Vinca",
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F02%2Fcatharanthus-tropical-rose-vinca-768f2e2c.jpg",
      description: "Annual Vinca is the most expensive plant we have",
    },
    {
      name: "Bacopa",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Starr_070815-8055_Bacopa_monnieri.jpg",
      description: "Bacopa is a white plant",
    },
  ];
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {plants.map((plant) => (
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard {...plant} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default ProductPage;
