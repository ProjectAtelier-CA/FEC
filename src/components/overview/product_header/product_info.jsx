/* eslint-disable camelcase */
/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import Styles from '../styles/styles';
import Buttons from '../buttons/buttons';
import Share from '../buttons/share';
import StarRating from '../../shared/StarRating';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function ProductInfo({
  imageIndex, setIndex, styles, currentStyle, setStyle, styleObject, setStyleObject, skus, setSkus, isLoading, currentSku, setSku, product_id, details, clickStyle, appAvgRating, reviewsRef,
}) {
  const isDark = useDarkMode();

  // Scrolls to Reviews section ref //
  const handleReviewsClick = (e) => {
    e.preventDefault();
    reviewsRef.current.scrollIntoView();
  };

  return (
    <div className="info">
      <div className="rating" key="rating">
        <StarRating score={appAvgRating} />
        <a href="#" className={`review-link ${isDark ? 'dark-link' : 'light-link'}`} onClick={(e) => handleReviewsClick(e)}>Read reviews...</a>
      </div>
      <h3 className={`category ${isDark ? 'dark-mode' : 'light-mode'}`}>{details.category}</h3>
      <div className={`product-name ${isDark ? 'dark-mode' : 'light-mode'}`}>{details.name}</div>
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
