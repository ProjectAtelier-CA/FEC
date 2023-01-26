import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';
import ProductCard from './ProductCard.jsx';

export default function RelatedProducts(props) {
  return (
    <section className='related-product'>
      <h1>Related Products Component</h1>
      <Carousel>{ ProductCard }</Carousel>
    </section>
  );
}
