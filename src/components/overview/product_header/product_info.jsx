/* eslint-disable camelcase */
/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Styles from '../styles/styles';
import Buttons from '../buttons/buttons';
import Share from '../buttons/share';
import StarRating from '../../shared/StarRating';

export default function ProductInfo({
  imageIndex, setIndex, styles, currentStyle, setStyle, styleObject, setStyleObject, skus, setSkus, isLoading, currentSku, setSku, product_id,
}) {
  const product = {
    id: 37311,
    campus: 'hr-rfe',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-08-13T14:37:33.145Z',
    updated_at: '2021-08-13T14:37:33.145Z',
  };

  return (
    <div className="info" key={product.id}>
      <div className="rating" key="rating">
        <StarRating rating={3} />
        <a href="http://www.google.com/" className="review-link">Read reviews...</a>
      </div>
      <h3 className="category">{product.category}</h3>
      <h1 className="product-name">{product.name}</h1>
      <Styles
        imageIndex={imageIndex}
        setIndex={setIndex}
        styles={styles}
        currentStyle={currentStyle}
        setStyle={setStyle}
        setStyleObject={setStyleObject}
        skus={skus}
        setSkus={setSkus}
        styleObject={styleObject}
        currentSku={currentSku}
        setSku={setSku}
      />
      <Buttons
        styles={styles}
        currentStyle={currentStyle}
        styleObject={styleObject}
        skus={skus}
        setSkus={setSkus}
        isLoading={isLoading}
        currentSku={currentSku}
        setSku={setSku}
        product_id={product_id}
      />
      <Share />
    </div>
  );
}
