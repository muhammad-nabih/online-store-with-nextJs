import React, { Suspense } from "react";

// MATERIAL UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const PostDetails = async ({productId}) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });



  const response = await fetch(`https://dummyjson.com/products/${productId}`, {
    next: {
      revalidate: 120,
    },
  });

  const data = await response.json();

  console.log(data);

  return (
    <>
      <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <Card sx={{ maxWidth: 420, maxHeight: 540, margin: "10px auto " }}>
          <CardMedia
            component="img"
            alt="green iguana"
            width={120}
            Height="120"
            // style={{maxHeight:"120px"}}
            image={data.thumbnail}
          />
          <CardContent>
            <Typography
              gutterBottom
              fontSize={20}
              variant="body2"
              component="div"
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontWeight: "bold",
                lineHeight: "20px",
              }}
              color="text.secondary"
            >
              {data.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              sx={{
                fontFamily: "poppins",
                fontWeight: "bold",
                background: "#f9cc19 !important",
                color: "#111111",
              }}
            >
              Buy Now
              <ShoppingCartIcon />
            </Button>
            <Button
              size="large"
              sx={{
                fontFamily: "poppins",
                fontWeight: "bold",
                background: "#f9cc19 !important",
                color: "#111111",
              }}
            >
              Price: {data.price}$
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default PostDetails;
