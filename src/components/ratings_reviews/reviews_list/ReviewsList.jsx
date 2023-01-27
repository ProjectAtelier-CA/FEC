import React from 'react';
import ReviewsSortMenu from './ReviewsSortMenu';
import ReviewsCardList from './ReviewsCardList';

export default function ReviewsList({ productReviews }) {
  return (
    <>
      <h2>Reviews List (Right Container)</h2>
      <ReviewsSortMenu />
      <ReviewsCardList productReviews={productReviews} />
    </>
  );
}
