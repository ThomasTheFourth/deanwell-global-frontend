import React from "react";
import ProductCard from "../../components/ProductCard";
import { Container, PageTitle } from "./styles";
import productsData from "../../data/products.json";

const Shop = () => {
  return (
    <Container>
      <PageTitle variant="h1">Shop</PageTitle>
      {productsData.map((product) => (
        <ProductCard key={product.snipCartId} product={product} />
      ))}
    </Container>
  );
};
export default Shop;
