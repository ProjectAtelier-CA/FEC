import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import ActionButtons from './ActionButtons';

export default function ReviewsCardList({ productReviews }) {
  const [reviewIndex, setReviewIndex] = useState(2); // Start it off at two reviews

  const reviewElements = productReviews.map((review) => (
    <ReviewCard key={review.review_id} review={review} />
  ));

  const handleMoreClick = () => {
    setReviewIndex(reviewIndex + 2);
  };

  return (
    <>
      <h4>ReviewsCardList (List of Review Cards)</h4>
      <div className="review-scroll">
        {reviewElements.slice(0, reviewIndex)}
      </div>
      <br />
      <ActionButtons
        handleMoreClick={handleMoreClick}
        totalReviews={productReviews.length}
        reviewIndex={reviewIndex}
      />
    </>
  );
}
