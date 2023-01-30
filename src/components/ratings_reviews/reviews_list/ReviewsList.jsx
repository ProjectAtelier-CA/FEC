import React, { useState } from 'react';
import ReviewsSortMenu from './ReviewsSortMenu';
import ReviewsCardList from './ReviewsCardList';
import ReviewModal from '../modals/ReviewModal';

export default function ReviewsList({ productReviews, starFilter }) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  // console.log(starFilter);

  return (
    <div className="reviews-list">
      <h2>Reviews List (Right Container)</h2>
      <ReviewsSortMenu />
      <ReviewsCardList
        productReviews={productReviews}
        setShowReviewModal={setShowReviewModal}
        starFilter={starFilter}
      />
      {showReviewModal ? <ReviewModal setShowReviewModal={setShowReviewModal} /> : null}
    </div>
  );
}
