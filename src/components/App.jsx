import React from 'react';
import RelatedProducts from './related_products/RelatedProducts';
import RatingsReviews from './ratings_reviews/RatingsReviews';
import QuestionsAnswers from './qa/QuestionsAnswers';
import Overview from './overview/Overview';
import '../styles/styles.scss';

export default function App() {
  return (
    <>
      <h1>All Our Components</h1>
      <Overview />
      {/* <RelatedProducts /> */}
      <QuestionsAnswers />
      <RatingsReviews />
    </>
  );
}
