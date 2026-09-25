import * as React from "react";
import {
  Image,
  ImageContainer,
  SecondaryText,
  Container,
  ProductCardContent,
  ProductName,
  BuyButton,
  BuyButtonRow,
  SoldOutRibbon,
  SoldOutText,
} from "./styles";

function SnipcartButton({ product }) {
  const productOptions = product.options.join("|");

  return (
    <button
      aria-hidden="true"
      tabIndex={-1}
      className="snipcart-add-item"
      style={{ display: "none" }}
      id={product.snipCartId}
      data-item-id={product.snipCartId}
      data-item-image={product.image}
      data-item-name={product.title}
      data-item-price={product.price}
      data-item-weight={product.weight}
      data-item-width="12"
      data-item-height="12"
      data-item-length="1"
      data-item-custom1-name={productOptions ? "Option" : ""}
      data-item-custom1-options={productOptions}
      data-item-url="https://www.deanwellglobalmusic.com/products-list.json"
      data-item-description={product.description}
    ></button>
  );
}

export default function ProductCard({ products }) {
  const [first] = products;
  const { title, image } = first;
  // Multi-format releases share one card, so the ribbon only applies when every
  // format is gone.
  const allSoldOut = products.every((product) => product.soldOut);
  const multiFormat = products.length > 1;

  const buyButtonClicked = (snipCartId) => {
    document.getElementById(snipCartId).click();
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} soldOut={allSoldOut ? 1 : 0} />
        {allSoldOut && <SoldOutRibbon>Sold Out</SoldOutRibbon>}
      </ImageContainer>
      <ProductCardContent>
        <ProductName variant="h6">{title}</ProductName>
        {multiFormat ? (
          <BuyButtonRow>
            {products.map((product) => (
              <React.Fragment key={product.snipCartId}>
                <BuyButton
                  onClick={() => buyButtonClicked(product.snipCartId)}
                  disabled={product.soldOut}
                >
                  {product.soldOut
                    ? `${product.description} - Sold Out`
                    : `${product.description} - $${product.price}`}
                </BuyButton>
                {!product.soldOut && <SnipcartButton product={product} />}
              </React.Fragment>
            ))}
          </BuyButtonRow>
        ) : (
          <>
            <SecondaryText>{first.description}</SecondaryText>
            {first.soldOut ? (
              <>
                <SoldOutText>Sold out. More coming soon.</SoldOutText>
                <BuyButton disabled>Sold Out</BuyButton>
              </>
            ) : (
              <>
                <BuyButton onClick={() => buyButtonClicked(first.snipCartId)}>
                  Add to Cart
                </BuyButton>
                <SnipcartButton product={first} />
              </>
            )}
          </>
        )}
      </ProductCardContent>
    </Container>
  );
}
