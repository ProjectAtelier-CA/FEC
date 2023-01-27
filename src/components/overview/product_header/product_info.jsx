// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function ProductInfo() {
  const product = {
    id: 1, stars: 5, category: 'Category', name: 'T-Shirt',
  };

  return (
    <div key={product.id}>
      <div key="rating">
        {product.stars}
        {' '}
        Stars
        <a href="http://www.google.com/">Reviews...</a>
      </div>
      <div className="category" key="category">
        <h3>{product.category}</h3>
      </div>
      <div key="name">
        <h1>{product.name}</h1>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  // images: PropTypes.array.isRequired
};
