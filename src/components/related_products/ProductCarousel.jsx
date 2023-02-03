import React, { useRef, useEffect, useState, Children, cloneElement } from 'react';
import { PropsProvider } from './Contexts';

const root = document.documentElement;

// all lengths are in rem
export default function ProductCarousel({ children, title }) {
  const N = Children.count(children);
  const scrollerWidth = N * 10 + (N-1) * 2;
  const containerRef = useRef(null);
  const rootFontSizeRef = useRef(parseInt(getComputedStyle(root).fontSize));
  const [shiftedWidth, setShiftedWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(null);

  // when browser resize, update containerWidth
  useEffect(() => {
    const updateContainerWidth = () => {
      setContainerWidth(containerRef.current.clientWidth / rootFontSizeRef.current);
    };

    window.addEventListener('resize', updateContainerWidth);
    updateContainerWidth(); // incase browser never resize;

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  });

  const scrollToRight = () => {
    const hiddenWidth = scrollerWidth - shiftedWidth - containerWidth;
    setShiftedWidth(shiftedWidth + Math.min(12, hiddenWidth + 2));
  }

  const scrollToLeft = () => {
    setShiftedWidth(Math.max(0, shiftedWidth - 12));
  }

  const scrollerProps = {
    className: 'product__carousel__scroller',
    style: { translate: `-${shiftedWidth}rem` }
  };

  const leftButtonProps = {
    onClick: scrollToLeft,
    className:
      shiftedWidth
      ? (null)
      : ('hidden')
  };

  // sacrifice this lengthy ternary for less states
  const rightButtonProps = {
    onClick: scrollToRight,
    className:
      containerWidth && containerWidth + shiftedWidth - 2 === scrollerWidth
      ? ('hidden')
      : (null)
  };

  // may want to refactor the button into svg or other icon?
  return (
    <div className='product__carousel'>
      <h2>{ title.toUpperCase() }</h2>
      <button { ...leftButtonProps }>{'<'}</button>
      <section className='product__carousel__container' ref={containerRef}>
        <div { ...scrollerProps }>
          <PropsProvider resetPosition= { () => setShiftedWidth(0) }>
            { children }
          </PropsProvider>
        </div>
      </section>
      <button { ...rightButtonProps }>{'>'}</button>
    </div>
  );

}
