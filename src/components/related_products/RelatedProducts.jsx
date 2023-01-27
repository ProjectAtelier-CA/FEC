// Now this is the index.jsx for related_products folder
import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductCard from './ProductCard';

export default function RelatedProducts(props) {
  return (
    <section className="related-product">
      <h1>Related Products Component</h1>
      <ProductCarousel>{ <ProductCard /> }</ProductCarousel>
    </section>
  );
}
