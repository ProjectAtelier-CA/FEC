import React, {useState, useEffect} from 'react';

const Description = ({product}) => {

  product = product || {
    id: 1,
    description: 'Blurb about a product...',
    title: 'Catchy phrase about a product...',
    attributes: ['Gluten free', 'No carbs', 'Smells good']
  };

  const [currentProduct, setProduct] = useState(product);

  return (
    <div key={currentProduct.id}>
      <h3>{currentProduct.title}</h3>
      <p>{currentProduct.description}</p>
      <span>-------------------------</span>
      {
        product.attributes.map((att) => {
          return (
            <div>✓ {att}</div>
          )
        })
      }
    </div>

  )
};

export default Description;