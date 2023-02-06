/* eslint-disable camelcase */
/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import Styles from '../styles/styles';
import Buttons from '../buttons/buttons';
import Share from '../buttons/share';
import StarRating from '../../shared/StarRating';

export default function ProductInfo({
  imageIndex, setIndex, styles, currentStyle, setStyle, styleObject, setStyleObject, skus, setSkus, isLoading, currentSku, setSku, product_id, details, clickStyle, appAvgRating,
}) {
  useEffect(() => {

  }, []);

  return (
    <div className="info" key={details.id}>
      <div className="rating" key="rating">
        <StarRating score={appAvgRating} />
        <a href="http://www.google.com/" className="review-link">Read reviews...</a>
      </div>
      <h3 className="category">{details.category}</h3>
      <h1 className="product-name">{details.name}</h1>
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
        clickStyle={clickStyle}
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
