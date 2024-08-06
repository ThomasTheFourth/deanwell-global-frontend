import React, { useState, useEffect } from "react";
import ReleaseCard from "../../components/ReleaseCard";
import { Container, LoaderImage, LoaderContainer, PageTitle } from "./styles";
import { backendUrl } from "../../constants/global";
import FeaturedProductCard from '../../components/FeaturedProductCard';
import loader from "./loader.gif";
import { CardGridContainer } from '../../components/CardGridContainer/styles';

const Releases = () => {
  const [data, setData] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetch(`${backendUrl}/api/releases?sort[1]=catalog_number:desc&populate=*`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result?.data) setData(result.data);
        },
        () => {
          setData(null);
        }
      );
  }, []);

  useEffect(() => {
    fetch(`${backendUrl}/api/products?populate=*&featured=true`)
      .then((res) => res.json())
      .then(
        (result) => {
          const featuredProduct = result.data.filter((item) => item.attributes.featured);
          if (featuredProduct?.length) setFeatured(featuredProduct[0].attributes);
        },
        () => {
          setFeatured(null);
        }
      );
  }, []);

  return (
    <>
      <Container>
        {!!featured ? <FeaturedProductCard product={featured} /> : ''}
        <PageTitle variant="h1">Releases</PageTitle>
        <CardGridContainer>
          {data.length && data.map((release) => (
            <ReleaseCard
              key={release.attributes.catalog_number}
              release={release}
            />
          ))}
        </CardGridContainer>
      </Container>
      {!data.length && (
        <LoaderContainer>
          <LoaderImage src={loader} />
        </LoaderContainer>
      )}
    </>
  );
};
export default Releases;
