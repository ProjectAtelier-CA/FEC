import React from 'react';
import RelatedProducts from './related_products/RelatedProducts';
import RatingsReviews from './ratings_reviews/RatingsReviews';
import QuestionsAnswers from './qa/QuestionsAnswers';
import Overview from './overview/Overview';
import StarReference from './shared/StarReference';
import '../styles/styles.scss';

export default function App() {
  return (
    <>
      {/* This component provides reference for Star Rating component, don't remove it */}
      <StarReference />
      <h1 data-testid="app-test">All Our Components</h1>
      <Overview />
      <RelatedProducts />
      <QuestionsAnswers />
      <RatingsReviews productID={37331} productName={"Dummy Product Name"} />
    </>
  );
}
