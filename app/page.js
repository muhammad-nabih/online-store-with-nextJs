import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
const page = () => {
  return (
    <div className="homePage">
      <header>
        <div className="content">
          <h1
            style={{
              fontFamily: "poppins",
              color: "#5d9baa ",
              wordSpacing: 5,
              fontWeight: "900",
              lineHeight: "2",
              marginTop: "30px",
              fontSize: "2.5rem",
            }}
          >
            The Store Of Phones{" "}
          </h1>
          <p
            style={{
              marginBottom: "10px",
              fontFamily: "poppins",
              color: "#f2f2f2 ",
              lineHeight: "1.5",
              fontWeight: "bold",
              maxWidth: "400px",
            }}
          >
            Celebrate your style with our extensive online store, offering a
            diverse range of products to suit every need and taste.
          </p>
          <Link href={"/components/product"}>
            <Button
              className="hoverClass"
              variant="outlined"
              sx={{
                textTransform: "uppercase",
                color: "#f2f2f2",
                minWidth: "200px",
              }}
            >
              Explore our products
            </Button>
          </Link>
        </div>

        <div className="image">
          <Image
            className="img"
            src={"image/landing2.svg"}
            alt="وصف الصورة"
            width={400}
            height={200}
            style={{ maxWidth: "100%" }}
          />
        </div>
      </header>
    </div>
  );
};

export default page;
