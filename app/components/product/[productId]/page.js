import React, { Suspense } from "react";
import "./productId.css";
// MATERIAL UI
import PostDetails from "../../detailsPost/productDetails";
import Loader from "../loader/load";
const page = async ({ params }) => {
  const productId = params.productId;
  return (
    <>
      <header>
        <h1
          style={{
            textShadow: "0px 1px 5px #1674d2",
            letterSpacing: "10px",
            fontFamily: "pacifico",
            color: "#e2e2e2",
          }}
          className="p-1 w-10/12 mx-auto my-1 text-center text-2xl"
        >
          Product Details
        </h1>
      </header>
      <Suspense
        fallback={
          <>
            <div
              style={{
                margin: "10px auto ",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <Loader />
            </div>
          </>
        }
      >
        <PostDetails productId={productId} />
      </Suspense>
    </>
  );
};

export default page;
