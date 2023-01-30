import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import ActionButtons from './ActionButtons';

const makeStarFilters = (starFilter) => {
  const filter = [];
  for (const key in starFilter) {
    if (starFilter[key]) {
      filter.push(key);
    }
  }
  return filter;
<<<<<<< HEAD
};

export default function ReviewsCardList({
  productReviews, setShowReviewModal, starFilter, reviewListTopRef,
}) {
  const [reviewIndex, setReviewIndex] = useState(2); // Start it off at two reviews
  const [filterBy, setFilterBy] = useState([]);

  useEffect(() => {
    // Should menu collaspe when we are switching our sort by filter?
=======
}

export default function ReviewsCardList({ productReviews, setShowReviewModal, starFilter }) {
  const [reviewIndex, setReviewIndex] = useState(2); // Start it off at two reviews
  const [filterBy, setFilterBy] = useState([]);
  // console.log(filterBy);

  useEffect(() => {
>>>>>>> 363465351a00b523abe621a0bebcc72f1641de57
    setFilterBy(makeStarFilters(starFilter));
    setReviewIndex(2); // Everytime we filter by stars, reset our reviewIndex
  }, [starFilter]);

  let filteredProductReviews = [];

  if (filterBy.length === 0) {
    filteredProductReviews = productReviews;
  } else {
    filteredProductReviews = productReviews.filter((productReview) => (
      filterBy.includes(productReview.rating.toString())
    ));
  }

  const reviewElements = filteredProductReviews.map((review) => (
    <ReviewCard key={review.review_id} review={review} />
  ));

  const handleMoreClick = () => {
    setReviewIndex(reviewIndex + 2);
  };

  return (
    <>
      <h4>ReviewsCardList (List of Review Cards)</h4>
      <div className="review-scroll">
        <div ref={reviewListTopRef} />
        <div>
          {reviewElements.slice(0, reviewIndex)}
        </div>
      </div>
      <br />
      <ActionButtons
        handleMoreClick={handleMoreClick}
        setShowReviewModal={setShowReviewModal}
        totalReviews={filteredProductReviews.length}
        reviewIndex={reviewIndex}
      />
    </>
  );
}
