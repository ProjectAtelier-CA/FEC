import React, { useState, useRef } from 'react';
import ProductCard from './ProductCard';

// get root font size in px
// this value should also be in global context;
const rootFontSize = parseInt(getComputedStyle(document.body).fontSize, 10);
const starSample = [0, 1, 2, 3, 3.2, 3.4, 3.5, 3.8, 3.9, 4, 5];

// assume gap is 2 rem, and card width is 10rem
export default function ProductCarousel() {
  // Tests out different star ratings and see the results!
  const productCards = starSample.map((x, i) => (<ProductCard key={i} rating={x} />));
  const N = productCards.length;
  // the length of carousel scroller in rem
  const scrollerLen = N * 10 + (N - 1) * 2;
  // the distance shifted to the left in rem
  const [shiftedDist, setShiftedDist] = useState(0);
  // the reference to the carousel container DOM element
  const containerRef = useRef(null);

  const scrollRight = () => {
    // the length of carousel container in rem
    const containerLen = containerRef.current.clientWidth / rootFontSize;
    // the length between right edge of container and scroller
    const hiddenLen = scrollerLen - shiftedDist - containerLen;

    // either move full card length, or just the hidden length
    setShiftedDist(shiftedDist + Math.min(12, hiddenLen + 2));
  };

  const scrollLeft = () => {
    // this logic is easier, because we shiftedDist is to the left
    setShiftedDist(Math.max(0, shiftedDist - 12));
  };

  const scrollerProps = {
    className: 'product__carousel__scroller',
    // translate to the left, so negative
    style: {
      translate: `-${shiftedDist}rem`,
    },
  };

  const buttonProps = [
    {
      className: shiftedDist ? null : 'invisible',
      onClick: scrollLeft,
    },
    {
      className:
        (!containerRef.current) ? null :
        (containerRef.current.clientWidth / rootFontSize + shiftedDist - 2 === scrollerLen) ?
        'invisible' : null,
      onClick: scrollRight,
    }
  ];

  return (
    < >
      <button {...buttonProps[0]}>{'<'}</button>
      <section className='product__carousel' ref={containerRef}>
        <div {...scrollerProps}>
          {productCards}
        </div>
      </section>
      <button {...buttonProps[1]}>{'>'}</button>
    </>
  );
}
// bullshit linter warning... please ignore
