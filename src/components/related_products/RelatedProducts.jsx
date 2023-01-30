import React from 'react';
import ProductCarousel from './ProductCarousel';

// you may want to make this url context and also the id;
// const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/';
// const id = null;

export default function RelatedProducts() {
  return (
    < >
      <h1>Related Products</h1>
      <div className="product__related">
        <ProductCarousel />
      </div>
      {/* <div className="product__outfit">
        <h1>My Outfit</h1>
        <ProductCarousel />
      </div> */}
    </>
  );
};