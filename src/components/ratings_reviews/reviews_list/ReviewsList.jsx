import React from 'react';
import ReviewsSortMenu from './ReviewsSortMenu';
import ReviewsCardList from './ReviewsCardList';
import ReviewModal from '../modals/ReviewModal';

export default function ReviewsList({ productReviews }) {
  return (
    <div className="reviews-list">
      <h2>Reviews List (Right Container)</h2>
      <ReviewsSortMenu />
      <ReviewsCardList productReviews={productReviews} />
      <ReviewModal />
    </div>
  );
}
