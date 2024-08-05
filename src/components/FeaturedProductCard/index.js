import * as React from 'react';
import { FeaturedCard, FeaturedCardInfo, FeaturedContainer } from './styles';
import { backendUrl } from "../../constants/global";
import { BuyButton } from '../ProductCard/styles';
import { PageTitle } from '../../pages/Shop/styles';

const FeaturedProductCard = ({ product }) => {
  const image =
    product.main_image.data.attributes.formats?.medium?.url ||
    product.main_image.data.attributes.formats?.small?.url;
  const { title, featured_description, description, snipCartId, price, weight } = product;
  const productOptions = product.product_options.data
    .map((option) => {
      return option.attributes.option;
    })
    .join("|");

  const buyButtonClicked = () => {
    document.getElementById(snipCartId).click();
  };

  return (
    <FeaturedContainer>
      <PageTitle variant='h1'>New Release</PageTitle>
      <FeaturedCard>
        <img alt={product.title} src={image} />
        <FeaturedCardInfo>
          <h2>{title}</h2>
          <p>{featured_description}</p>
          <BuyButton onClick={buyButtonClicked}>Add to Cart</BuyButton>
          <button
            variant='contained'
            className='snipcart-add-item'
            style={{ display: 'none' }}
            id={snipCartId}
            data-item-id={snipCartId}
            data-item-image={image}
            data-item-name={title}
            data-item-price={price}
            data-item-weight={weight}
            data-item-custom1-name={productOptions ? 'Option' : ''}
            data-item-custom1-options={productOptions}
            data-item-url={`${backendUrl}/api/products-list.json`}
            data-item-description={description}></button>
        </FeaturedCardInfo>
      </FeaturedCard>
    </FeaturedContainer>
  );
};

export default FeaturedProductCard;
