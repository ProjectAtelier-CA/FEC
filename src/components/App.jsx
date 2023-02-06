import React, { useState, useEffect } from 'react';
import RelatedProducts from './related_products/RelatedProducts';
import RatingsReviews from './ratings_reviews/RatingsReviews';
import QuestionsAnswers from './qa/QuestionsAnswers';
import Overview from './overview/Overview';
import StarReference from './shared/StarReference';
import '../styles/styles.scss';

/* ----------- Set up id state -------------- */
export default function App() {
  // later this initial id should be passed down from index.jsx as props
  const [id, setId] = useState(37313);
  const [dark, goDark] = useState(false);

  return (
    <>
      {/* This component provides reference for Star Rating component, don't remove it */}
      <StarReference />
      {/* <h1 data-testid="app-test">All Our Components</h1> */}
      <Overview product_id={id} goDark={goDark} dark={dark} />
      <RelatedProducts id={id} setId={setId} />
      <QuestionsAnswers />
      <RatingsReviews productID={37313} productName={"Dummy Product Name"} />
    </>
  );
}
