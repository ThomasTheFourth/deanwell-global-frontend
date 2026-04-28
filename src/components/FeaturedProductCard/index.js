import * as React from "react";
import {
  Image,
  ImageContainer,
  SecondaryText,
  Container,
  FeaturedProductCardContent,
  FeaturedProductName,
  BuyButton,
} from "./styles";

export default function FeaturedProductCard({ product }) {
  const { title, description, snipCartId, price, weight, image, options } =
    product;
  const productOptions = options.join("|");

  const buyButtonClicked = () => {
    document.getElementById(snipCartId).click();
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <FeaturedProductCardContent>
        <FeaturedProductName variant="h6">{title}</FeaturedProductName>
        <SecondaryText>{description}</SecondaryText>
        <BuyButton onClick={buyButtonClicked}>Add to Cart</BuyButton>
        <button
          aria-hidden="true"
          tabIndex={-1}
          className="snipcart-add-item"
          style={{ display: "none" }}
          id={snipCartId}
          data-item-id={snipCartId}
          data-item-image={image}
          data-item-name={title}
          data-item-price={price}
          data-item-weight={weight}
          data-item-width="12"
          data-item-height="12"
          data-item-length="1"
          data-item-custom1-name={productOptions ? "Option" : ""}
          data-item-custom1-options={productOptions}
          data-item-url="https://www.deanwellglobalmusic.com/products-list.json"
          data-item-description={description}
        ></button>
      </FeaturedProductCardContent>
    </Container>
  );
}
