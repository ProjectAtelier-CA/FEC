// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Description() {
  const product = {
    id: 1,
    description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    title: 'Catchy phrase about a product...',
    attributes: ['Gluten free', 'No carbs', 'Smells good'],
  };

  // eslint-disable-next-line no-unused-vars
  const [currentProduct, setProduct] = useState(product);

  return (
    <div className="o-description">
      <div className="description-content">
        <h3 className="o-title">{currentProduct.title}</h3>
        <p className="o-body">{currentProduct.description}</p>
      </div>
      <div className="divider" />
      <div className="attributes">
        {
          product.attributes.map((att) => (
            <div className="o-attribute" key={currentProduct.id}>
              <div className="checkmark">✓</div>
              <div className="attribute-copy">{att}</div>
            </div>
          ))
        }
      </div>
    </div>

  );
}

Description.propTypes = {
  // images: PropTypes.array.isRequired
};
