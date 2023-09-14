import React, { Suspense } from "react";
import "./productId.css";
// MATERIAL UI
import PostDetails from "../../detailsPost/postDetails";
import Loader from "../loader/load";
const page = async ({ params }) => {
  const productId = params.productId;
  return (
    <>
      <header>
        <h1 className="via-red-800 p-3 bg-zinc-400 rounded w-10/12 mx-auto my-4 text-center text-2xl">
          Product Details
        </h1>
      </header>
      <Suspense
        fallback={
          <><h4 style={{margin:"100px auto " , display:"flex", justifyContent:"center"}}> <Loader /></h4>
           
          </>
        }
      >
        <PostDetails productId={productId} />
      </Suspense>
    </>
  );
};

export default page;
