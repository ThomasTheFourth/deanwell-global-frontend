import * as React from "react";
import productsData from "../../data/products.json";
import {
  Image,
  ImageContainer,
  SecondaryText,
  Container,
  FeaturedProductCardContent,
  FeaturedProductName,
  AlbumTitle,
  Eyebrow,
  BuyButtonRow,
  BuyButton,
} from "./styles";

export default function FeaturedProductCard({ featured }) {
  if (!featured || !featured.snipCartIds) {
    return null;
  }

  const products = featured.snipCartIds
    .map((id) => productsData.find((p) => p.snipCartId === id))
    .filter(Boolean);

  if (!products.length) {
    return null;
  }

  // The Shop page also renders a ProductCard for these same products, whose
  // hidden Snipcart button already uses snipCartId as its DOM id. Namespace
  // ours so the two never collide; data-item-id stays the real Snipcart id.
  const buttonDomId = (snipCartId) => `featured-${snipCartId}`;

  const buyButtonClicked = (snipCartId) => {
    document.getElementById(buttonDomId(snipCartId)).click();
  };

  return (
    <Container>
      <ImageContainer>
        <Image
          src={featured.image}
          alt={`${featured.artist} - ${featured.title}`}
        />
      </ImageContainer>
      <FeaturedProductCardContent>
        <Eyebrow>{featured.eyebrow}</Eyebrow>
        <FeaturedProductName variant="h2">
          {featured.artist}
        </FeaturedProductName>
        <AlbumTitle>{featured.title}</AlbumTitle>
        <SecondaryText>{featured.blurb}</SecondaryText>
        <BuyButtonRow>
          {products.map((product) => {
            const productOptions = product.options.join("|");
            return (
              <React.Fragment key={product.snipCartId}>
                <BuyButton
                  onClick={() => buyButtonClicked(product.snipCartId)}
                  disabled={product.soldOut}
                >
                  {product.soldOut
                    ? `${product.description} - Sold Out`
                    : `${product.description} - $${product.price}`}
                </BuyButton>
                <button
                  aria-hidden="true"
                  tabIndex={-1}
                  className="snipcart-add-item"
                  style={{ display: "none" }}
                  id={buttonDomId(product.snipCartId)}
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
              </React.Fragment>
            );
          })}
        </BuyButtonRow>
      </FeaturedProductCardContent>
    </Container>
  );
}
