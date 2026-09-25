import React from "react";
import ProductCard from "../../components/ProductCard";
import FeaturedProductCard from "../../components/FeaturedProductCard";
import { Container, PageTitle } from "./styles";
import productsData from "../../data/products.json";
import featuredData from "../../data/featured.json";

// A release sold in several formats appears once per format in products.json.
// Group those into a single card so the shop shows one card per release with a
// buy button for each format.
const groupByTitle = (products) =>
  products.reduce((groups, product) => {
    const group = groups.find(([first]) => first.title === product.title);
    if (group) {
      group.push(product);
    } else {
      groups.push([product]);
    }
    return groups;
  }, []);

const Shop = () => {
  return (
    <Container>
      <PageTitle variant="h1">Shop</PageTitle>
      <FeaturedProductCard featured={featuredData} />
      {groupByTitle(productsData).map((products) => (
        <ProductCard key={products[0].snipCartId} products={products} />
      ))}
    </Container>
  );
};
export default Shop;
