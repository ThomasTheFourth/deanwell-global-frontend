import * as React from "react";
import {
  Image,
  ImageContainer,
  SecondaryText,
  Container,
  ProductCardContent,
  ProductName,
  BuyButton,
  SoldOutRibbon,
  SoldOutText,
} from "./styles";

export default function ProductCard({ product }) {
  const {
    title,
    description,
    snipCartId,
    price,
    weight,
    image,
    options,
    soldOut,
  } = product;
  const productOptions = options.join("|");

  const buyButtonClicked = () => {
    document.getElementById(snipCartId).click();
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} soldOut={soldOut ? 1 : 0} />
        {soldOut && <SoldOutRibbon>Sold Out</SoldOutRibbon>}
      </ImageContainer>
      <ProductCardContent>
        <ProductName variant="h6">{title}</ProductName>
        <SecondaryText>{description}</SecondaryText>
        {soldOut ? (
          <>
            <SoldOutText>Sold out. More coming soon.</SoldOutText>
            <BuyButton disabled>Sold Out</BuyButton>
          </>
        ) : (
          <>
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
          </>
        )}
      </ProductCardContent>
    </Container>
  );
}
