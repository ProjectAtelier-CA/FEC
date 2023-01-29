import React, { useState } from 'react';
import ReviewsSortMenu from './ReviewsSortMenu';
import ReviewsCardList from './ReviewsCardList';
import ReviewModal from '../modals/ReviewModal';

export default function ReviewsList({ productReviews }) {
  const [showReviewModal, setShowReviewModal] = useState(false);

  return (
    <div className="reviews-list">
      <h2>Reviews List (Right Container)</h2>
      <ReviewsSortMenu />
      <ReviewsCardList
        productReviews={productReviews}
        setShowReviewModal={setShowReviewModal}
      />
      {showReviewModal ? <ReviewModal setShowReviewModal={setShowReviewModal} /> : null}
    </div>
  );
}
