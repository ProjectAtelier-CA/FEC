// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function ProductInfo() {
  const product = {
    id: 1, stars: 5, category: 'CATEGORY', name: 'T-Shirt',
  };

  return (
    <div key={product.id}>
      <div className="rating" key="rating">
        {product.stars}
        {' '}
        Stars
        <a href="http://www.google.com/">Reviews...</a>
      </div>
      <h3 className="category">{product.category}</h3>
      {/* <div className="category" key="category">
      </div> */}
      <h1 className="product-name">{product.name}</h1>
      {/* <div className="product-name" key="name"> */}
      {/* </div> */}
    </div>
  );
}

ProductInfo.propTypes = {
  // images: PropTypes.array.isRequired
};
