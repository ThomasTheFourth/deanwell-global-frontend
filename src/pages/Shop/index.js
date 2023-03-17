import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { Container, LoaderImage, LoaderContainer, PageTitle } from "./styles";
import { backendUrl } from "../../constants/global";
import loader from "./loader.gif";
import FeaturedProductCard from "../../components/FeaturedProductCard";

const Shop = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(`${backendUrl}/api/products?populate=*`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.data);
        },
        () => {
          setData(null);
        }
      );
  }, []);

  return (
    <>
      <Container>
        <PageTitle variant="h1">Shop</PageTitle>
        {data.map((product) => (
          <ProductCard
            key={product.attributes.name + product.attributes.description}
            product={product}
          />
        ))}
      </Container>
      {!data.length && (
        <LoaderContainer>
          <LoaderImage src={loader} />
        </LoaderContainer>
      )}
    </>
  );
};
export default Shop;
