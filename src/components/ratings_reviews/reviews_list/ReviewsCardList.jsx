import React from 'react';
import ReviewCard from './ReviewCard';
import ActionButtons from './ActionButtons';

export default function ReviewsCardList({ productReviews }) {
  const reviewElements = productReviews.map((review) => (
    <ReviewCard key={review.review_id} review={review} />
  ));

  return (
    <>
      <h4>ReviewsCardList (List of Review Cards)</h4>
      {reviewElements}
      <br />
      <ActionButtons />
    </>
  );
}
