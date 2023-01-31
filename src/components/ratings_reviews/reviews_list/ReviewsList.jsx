import React, { useState, useRef } from 'react';
import ReviewsSortMenu from './ReviewsSortMenu';
import ReviewsCardList from './ReviewsCardList';
import ReviewModal from '../modals/ReviewModal';

export default function ReviewsList({ productReviews, starFilter, handleSortClick, sortBy }) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const reviewListTopRef = useRef(null);

  return (
    <div className="reviews-list">
      <h2>Reviews List (Right Container)</h2>
      <ReviewsSortMenu
        handleSortClick={handleSortClick}
        numReviews={productReviews.length}
        sortBy={sortBy}
        reviewListTopRef={reviewListTopRef}
      />
      <ReviewsCardList
        productReviews={productReviews}
        setShowReviewModal={setShowReviewModal}
        starFilter={starFilter}
        sortBy={sortBy}
        reviewListTopRef={reviewListTopRef}
      />
      {showReviewModal ? <ReviewModal setShowReviewModal={setShowReviewModal} /> : null}
    </div>
  );
}
