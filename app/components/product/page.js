import "./product.css"
import Link from "next/link";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// هذه هي صفحة عرض جميع المنتجات
const ProductsPage = async () => {
  // استدعاء API لجلب بيانات المنتجات
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const { products } = data; // استخراج قائمة المنتجات من البيانات

  // تحويل بيانات المنتجات إلى عناصر JSX لعرضها في الصفحة
  let productsJsx = products.map((product) => {
    return (
      // استخدام مكون Link لإنشاء روابط ديناميكية إلى صفحات تفاصيل المنتج
      <Link  className="product" href={`/components/product/${product.id}`} key={product.id}>
        <div
          className="product bg-zinc-300"
          style={{
            padding: "10px",
            borderRadius: "10px ",
            margin: "10px ",
            textAlign: "center",
            color: "black",
            fontFamily: "pacifico",
            border: "2px solid #5d9baa",
            height: "130px",
          }}
        >
          <h3
            style={{
              background: "#191919",
              color: "#5d9baa",
              letterSpacing: 2,
              fontSize: ".6rem",
              padding: "5px",
              fontFamily: "poppins",
              fontWeight: "bold",

              display: "flex",
              gap: "7px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {product.title}
            <PhoneIphoneIcon />
          </h3>
          <p
            style={{
              width: "90%",
              fontSize: ".6rem",
              fontWeight: "bold",
              padding: "2px",
              fontFamily: "poppins",
            }}
          >
            {product.description}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div className="container mx-auto">
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
          All Products
        </h1>
      </header>

      <div
        style={{
          margin: "10px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax( 250px, 1fr))",
          gap: "10px",
          width: "90%",
        }}
    className="product-title"
      >
        {productsJsx} {/* عرض عناصر المنتج كـ JSX */}
      </div>
    </div>
  );
};

export default ProductsPage;
