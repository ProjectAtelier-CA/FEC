import React from 'react';
import RatingsBreakdown from './ratings_breakdown/RatingsBreakdown.jsx';
import ReviewsList from './reviews_list/ReviewsList.jsx';

const RatingsReviews =  () => {

  return (
    <>
      <h1>RatingsReviews Component</h1>
      <RatingsBreakdown />
      <ReviewsList />
    </>
  );
}

export default RatingsReviews;