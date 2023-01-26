import React, {useState, useEffect} from 'react';

const ProductInfo = ({product}) => {

  product = product || {stars: 5, category: 'Category', name: 'T-Shirt'}

  return (
    <>
      <div>
        {product.stars} Stars <a href='http://www.google.com/'>Reviews...</a>
      </div>
      <div>
        <h3>{product.category}</h3>
      </div>
      <div>
        <h1>{product.name}</h1>
        </div>
    </>
  )

}

export default ProductInfo;