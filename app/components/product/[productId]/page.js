import React from "react";
import "./productId.css"; // استيراد ملف CSS لتخصيص المظهر
import PostDetails from "../../detailsPost/productDetails"; // استيراد مكون `PostDetails` لعرض تفاصيل المنتج

// هذا الملف هو صفحة تفاصيل المنتج. يستخدم `params` للوصول إلى معلومات المنتج المحددة.
const ProductPage = async ({ params }) => {
  const productId = params.productId; // استخراج معرف المنتج من الـ params

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

      {/* عرض تفاصيل المنتج باستخدام مكون PostDetails وإرسال معرف المنتج إليه */}
      <PostDetails productId={productId} />
    </>
  );
};

export default ProductPage;
