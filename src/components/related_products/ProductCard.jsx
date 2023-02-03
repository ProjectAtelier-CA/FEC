import React from 'react';
import StarRating from '../shared/StarRating';
import useFetch from './useFetch';
import { useProps } from './Contexts';

// SVG for delete and star buttons
const deleteButtonSVG = (
  <svg viewBox='0 0 100 100'>
    <circle cx='50' cy='50' r='28' />
    <path d="M40,40 L60,60 M40,60 L60,40" />,
  </svg>
);
// Only optimize star ratings cuz it is used too often
const starButtonSVG = (
  <svg viewBox='0 0 100 100'>
    <use href='#star' fill="url('#star__fill--0')" />;
  </svg>
);
const adderCardSVG = (
  <svg viewBox='0 0 100 100'>
    <path d="M50,60 h20 h-40 M50,60 v20 v-40" />
  </svg>
);

// ProductCard component
export default function ProductCard (props) {
  const { type, id, cardCallback, buttonCallback } = props;
  const { resetPosition } = useProps();
  const className = `product__card product__card--${type}`;

  // Adder Card scenario
  if (type === 'adder') return (
    <article className={ className } onClick={ cardCallback }>
      { adderCardSVG }
      <section>
        <p>Add to Outfit</p>
      </section>
    </article>
  );

  // fetch data at ProductCard level, which is not ideal
  // but this is good for preload data for next product redirection
  const {data, error, loading} = useFetch(id);

  // Refactor this one for better UX
  if (!data) return (
    <article className='product__card product__card--adder'>
      <svg viewBox='0 0 100 100'>
        <rect width='100' height='100' fill='grey' />
      </svg>
      <section>
        <p>Loading...</p>
      </section>
    </article>
  );

  // when mousedown over 0.2s cancel click
  // if clicked, reset carousel position
  function onMouseDownCard(event) {
    if (event.target.closest('button')) return;

    const card = event.currentTarget;
    let isClick = true;
    let timerId = setTimeout(() => isClick = false, 200);

    card.onmouseup = () => {
      clearTimeout(timerId);
      card.onmouseup = null;

      if (!isClick) return false;

      resetPosition();
      cardCallback();
    }
  }

  // We need to stop bubbling for the CTA button
  function onClickButton(event) {
    event.stopPropagation();
    buttonCallback(data);
  }

  const { photo, category, name, originalPrice, salePrice, rating } = data;
  const price = salePrice === null ?
    <p>{ '$' + originalPrice }</p> :
    <p><s>{ '$' + originalPrice}</s>{ ' $' + salePrice }</p>;

  // general case: (1)related card (2)outfit card
  return (
    <article className={ className } onMouseDown={ onMouseDownCard }>
      {/* this alt is an accesibility problem */}
      <img src={ photo.url } alt='' />
      <button type='button' onClick={ onClickButton }>
        { type === 'related' ? starButtonSVG : deleteButtonSVG }
      </button>
      <section>
        <p>{ category }</p>
        <h2>{ name }</h2>
        { price }
        <StarRating score={ rating } />
      </section>
    </article>
  );
}
