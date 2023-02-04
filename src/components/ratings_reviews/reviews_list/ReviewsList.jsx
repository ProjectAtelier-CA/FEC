import React, { useState, useEffect, useRef } from 'react';
import ReviewsSortMenu from './ReviewsSortMenu';
import ReviewsCardList from './ReviewsCardList';
import ReviewModal from '../modals/ReviewModal';

export default function ReviewsList({
  productReviews, starFilter, handleSortClick, sortBy, reviewMetaData, setRerender, productName
}) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const reviewListTopRef = useRef(null);
  // console.log(searchInput);

  return (
    <div className="reviews-list">
      <ReviewsSortMenu
        handleSortClick={handleSortClick}
        numReviews={productReviews.length}
        sortBy={sortBy}
        reviewListTopRef={reviewListTopRef}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <ReviewsCardList
        productReviews={productReviews}
        setShowReviewModal={setShowReviewModal}
        starFilter={starFilter}
        sortBy={sortBy}
        reviewListTopRef={reviewListTopRef}
        setRerender={setRerender}
        searchInput={searchInput}
      />
      {showReviewModal
      && (
        <ReviewModal
          setShowReviewModal={setShowReviewModal}
          reviewMetaData={reviewMetaData}
          setRerender={setRerender}
          productName={productName}
        />
      )}
    </div>
  );
}
