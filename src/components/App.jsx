import React from 'react';
import RelatedProducts from './related_products/RelatedProducts.jsx';
import RatingsReviews from './ratings_reviews/RatingsReviews.jsx';
import QuestionsAnswers from './qa/QuestionsAnswers.jsx';
import Overview from './overview/Overview.jsx';
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

  )
}