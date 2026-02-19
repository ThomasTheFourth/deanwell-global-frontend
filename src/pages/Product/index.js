import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/products.json";

const Product = () => {
  let { id } = useParams();
  const product = productsData.find((p) => p.snipCartId === id);

  if (!product) {
    return <div style={{ margin: 16 }}>Product not found</div>;
  }

  return (
    <div style={{ margin: 16 }}>
      <h2>{product.title}</h2>
      <img src={product.image} style={{ maxWidth: "400px" }} alt={product.title} />
      <br />
      Description: {product.description}
    </div>
  );
};
export default Product;
