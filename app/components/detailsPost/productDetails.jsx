"use client"; // إشارة لاستخدام النمط العميل في Next.js
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Load from "../product/loader/load";
import "./productDetails.css"; // استيراد ملف CSS لتخصيص المظهر
import { blue, deepOrange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: blue[400] },
    secondary: { main: deepOrange[500] },
  },
});

const ProductDetails = ({ productId }) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
          {
            next: {
              revalidate: 120,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    // إذا كان التحميل قيد التنفيذ، عرض مكون التحميل
    return (
      <div
        className="loader"
        style={{
          width: "80%",
          height: "100%",
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px auto ",
        }}
      >
        <Load />
      </div>
    );
  } else {
    // إذا تم تحميل البيانات بنجاح، عرض بيانات المنتج
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: 320,
              maxHeight: 540,
              background: "transparent",
              color: "white",
              border: "1px solid #1674d2",
              boxShadow: " 1px 1px 12px rgba(16, 74,442, .432)",
              borderRadius: "10px",
              margin: "10px auto",
            }}
          >
            <CardMedia
              component="img"
              alt="Product Image"
              style={{
                width: "150px",
                height: "150px",
                margin: "0 auto ",
                padding: "10px",
                borderRadius: "20px",
              }}
              image={productData.thumbnail}
            />
            <CardContent>
              <Typography
                gutterBottom
                color={"#1674d2"}
                variant="h5"
                component="div"
              >
                {productData.title}
              </Typography>
              <Typography variant="body2" color="#777">
                {productData.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="btn-card"  size="large">
                Buy Now
                <ShoppingCartIcon />
              </Button>
              <Button className="btn-card"  size="large">
                Price: {productData.price}$
              </Button>
            </CardActions>
          </Card>
        </div>
      </ThemeProvider>
    );
  }
};

export default ProductDetails;
