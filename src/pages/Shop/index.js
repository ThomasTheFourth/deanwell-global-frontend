import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import {
  Container,
  LoaderImage,
  LoaderContainer,
  PageTitle,
} from './styles';
import { CardGridContainer } from '../../components/CardGridContainer/styles';
import { backendUrl } from '../../constants/global';
import FeaturedProductCard from '../../components/FeaturedProductCard';
import loader from './loader.gif';

const Shop = () => {
  const [data, setData] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetch(`${backendUrl}/api/products?populate=*&sort=title`)
      .then((res) => res.json())
      .then(
        (result) => {
          const featuredProduct = result.data.filter((item) => item.attributes.featured);
          if (featuredProduct?.length) setFeatured(featuredProduct[0].attributes);
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
        {!!featured ? <FeaturedProductCard product={featured} /> : ''}
        <PageTitle variant='h1'>Products</PageTitle>
        <CardGridContainer>
          {data.map((product) => (
            <ProductCard
              key={product.attributes.name + product.attributes.description}
              product={product}
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
export default Shop;
