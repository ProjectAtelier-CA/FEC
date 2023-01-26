import React, {useState, useEffect} from 'react';

const ProductInfo = ({product}) => {

  product = product || {id: 1, stars: 5, category: 'Category', name: 'T-Shirt'}

  return (
    <div key={product.id}>
      <div key='rating'>
        {product.stars} Stars <a href='http://www.google.com/'>Reviews...</a>
      </div>
      <div key='category'>
        <h3>{product.category}</h3>
      </div>
      <div key='name'>
        <h1>{product.name}</h1>
        </div>
    </div>
  )

}

export default ProductInfo;