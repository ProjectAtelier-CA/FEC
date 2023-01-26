import React from 'react';
import RelatedProducts from './related_products/rp_index.jsx';
import RatingsReviews from './ratings_reviews/RatingsReviews.jsx';
import QA from './qa/qa_index.jsx';
import Overview from './overview/Overview.jsx';

export default function App() {
  return (
    <>
      <h1>All Our Components</h1>
      <Overview />
      {/* <RelatedProducts /> */}
      <QA />
      <RatingsReviews />
    </>

  )
}