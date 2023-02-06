import React, { useState, useEffect, useRef } from 'react';
import ReviewsSortMenu from './ReviewsSortMenu';
import ReviewsCardList from './ReviewsCardList';
import ReviewModal from '../modals/ReviewModal';

export default function ReviewsList({
  productReviews, starFilter, handleSortClick, sortBy,
  reviewMetaData, setRerender, productName,
}) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const reviewListTopRef = useRef(null);

  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const debounceTimeoutID = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 500);

    return (() => {
      clearTimeout(debounceTimeoutID);
    });
  }, [searchInput]);

  return (
    <div className="reviews-list">
      <ReviewsSortMenu
        handleSortClick={handleSortClick}
        numReviews={productReviews.length}
        sortBy={sortBy}
        reviewListTopRef={reviewListTopRef}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        setDebouncedSearch={setDebouncedSearch}
      />
      <ReviewsCardList
        productReviews={productReviews}
        setShowReviewModal={setShowReviewModal}
        starFilter={starFilter}
        sortBy={sortBy}
        reviewListTopRef={reviewListTopRef}
        setRerender={setRerender}
        searchInput={searchInput}
        debouncedSearch={debouncedSearch}
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
