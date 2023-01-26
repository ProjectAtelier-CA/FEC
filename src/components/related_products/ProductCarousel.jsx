import React, {useState, useEffect} from 'react';

export default function ProductCarousel(props) {
  return (
    <section className='related-product'>
      <h1>Carousel Component</h1>
      { props.children }
    </section>
  );
}
