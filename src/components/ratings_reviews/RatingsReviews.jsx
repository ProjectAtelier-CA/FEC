import React from 'react';
import RatingsBreakdown from './ratings_breakdown/RatingsBreakdown';
import ReviewsList from './reviews_list/ReviewsList';

export default function RatingsReviews() {
  return (
    <>
      <h1>RatingsReviews Component</h1>
      <RatingsBreakdown />
      <ReviewsList />
    </>
  );
}
