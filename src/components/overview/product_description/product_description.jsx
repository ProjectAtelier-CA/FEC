// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Description() {
  const product = {
    id: 1,
    description: 'Blurb about a product...',
    title: 'Catchy phrase about a product...',
    attributes: ['Gluten free', 'No carbs', 'Smells good'],
  };

  // eslint-disable-next-line no-unused-vars
  const [currentProduct, setProduct] = useState(product);

  return (
    <div key={currentProduct.id}>
      <h3>{currentProduct.title}</h3>
      <p>{currentProduct.description}</p>
      <span>-------------------------</span>
      {
        product.attributes.map((att) => (
          <div>
            ✓
            {att}
          </div>
        ))
      }
    </div>

  );
}

Description.propTypes = {
  // images: PropTypes.array.isRequired
};
