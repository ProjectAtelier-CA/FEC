import React from 'react';
// just import the StarRating component and insert in your component like this.
import StarRating from '../shared/StarRating';

const imageUrl = 'https://images.unsplash.com/photo-1605134513573-384dcf99a44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

// both card and button are clickable, so might need to stop bubbling
export default function ProductCard({ rating }) {
  return (
    <article className="product__card">
      <img src={imageUrl} alt="placeholder" />
      {/* this button will be dynamically generated, if star or delete */}
      <button type="button">
        <svg viewBox="0 0 100 100">
          <use href="#star" fill="url('#star__fill--0')" />
        </svg>
      </button>
      <section>
        <p>category</p>
        <h2>Latest Razer Blade 16 with RTX3090</h2>
        <p>$2499</p>
        {/* Just pass score prop into this component and it will render star rating for you */}
        <StarRating score={rating} />
      </section>
    </article>
  );
}
