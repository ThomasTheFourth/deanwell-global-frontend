import * as React from "react";
import {
  Image,
  ImageContainer,
  SecondaryText,
  Container,
  ProductCardContent,
  ProductName,
  BuyButton,
} from "./styles";
import { backendUrl } from "../../constants/global";

export default function ProductCard({ product }) {
  const image =
    product.attributes.main_image.data.attributes.formats?.medium?.url ||
    product.attributes.main_image.data.attributes.formats?.small?.url;
  const { title, description, snipCartId, price, weight } = product.attributes;
  const productOptions = product.attributes.product_options.data
    .map((option) => {
      return option.attributes.option;
    })
    .join("|");

  const buyButtonClicked = () => {
    document.getElementById(snipCartId).click();
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <ProductCardContent>
        <ProductName variant="h6">{title}</ProductName>
        <SecondaryText>{description}</SecondaryText>
        <BuyButton onClick={buyButtonClicked}>Add to Cart</BuyButton>
        <button
          variant="contained"
          className="snipcart-add-item"
          style={{ display: "none" }}
          id={snipCartId}
          data-item-id={snipCartId}
          data-item-image={image}
          data-item-name={title}
          data-item-price={price}
          data-item-weight={weight}
          data-item-custom1-name={productOptions ? "Option" : ""}
          data-item-custom1-options={productOptions}
          data-item-url={`${backendUrl}/api/products-list.json`}
          data-item-description={description}
        ></button>
      </ProductCardContent>
    </Container>
  );
}
