import Link from "next/link";

// PRODUCTS PAGE VIEW ALL PRODUCT HERE
const page = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const { products } = data;

  let productsJsx = products.map((product) => {
    return (
      <Link href={`/components/product/${product.id}`}>
        <div
          className="product bg-zinc-200"
          style={{
            padding: "10px",
            borderRadius: "10px ",
            margin: "10px ",
            textAlign: "center",
            color: "black",
            fontFamily: "pacifico",
            border: "2px solid #5d9baa",
            height: "120px",
          }}
        >
          <h2
            style={{
              background: "#191919",
              color: "#5d9baa",
              letterSpacing: 2,
              fontSize: ".8rem",
              padding: "5px",
              fontFamily: "poppins",
              fontWeight: "bold",
            }}
          >
            {product.title}
          </h2>
          <p
            style={{
              width: "90%",
              fontSize: ".7rem",
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
        <h1 className="via-red-800 p-3 bg-zinc-400 rounded w-10/12 mx-auto my-4 text-center text-2xl">
          All Products{" "}
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
      >
        {productsJsx}
      </div>
    </div>
  );
};

export default page;
