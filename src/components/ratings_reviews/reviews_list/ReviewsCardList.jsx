import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import ActionButtons from './ActionButtons';
import ImageModal from '../../shared/ImageModal';

const makeStarFilters = (starFilter) => {
  const filter = [];
  for (const key in starFilter) {
    if (starFilter[key]) {
      filter.push(key);
    }
  }
  return filter;
};

export default function ReviewsCardList({
  productReviews, setShowReviewModal, starFilter, reviewListTopRef,
}) {
  const [reviewIndex, setReviewIndex] = useState(2); // Start it off at two reviews
  const [filterBy, setFilterBy] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImageURL, setModalImageURL] = useState('');

  useEffect(() => {
    // Should menu collaspe when we are switching our sort by filter?
    setFilterBy(makeStarFilters(starFilter));
    setReviewIndex(2); // Everytime we filter by stars, reset our reviewIndex
  }, [starFilter]);

  const handleMoreClick = () => {
    setReviewIndex(reviewIndex + 2);
  };

  const handleImageClick = (e) => {
    if (e.target.src) {
      setModalImageURL(e.target.src);
      setShowModal(true);
    }
  };

  const handleModalClick = () => {
    setShowModal(false);
  };

  const handleHelpfulClick = (reviewID) => {
    // Not sure why its giving unauthorized in axios but not postman
    // axios.post(`http://localhost:8081/reviews/${reviewID}/helpful`).then(() => {
    //   console.log('request sent');
    // }).catch(() => {
    //   console.log('error occurred sending put request');
    // });
  };

  let filteredProductReviews = [];

  if (filterBy.length === 0) {
    filteredProductReviews = productReviews;
  } else {
    filteredProductReviews = productReviews.filter((productReview) => (
      filterBy.includes(productReview.rating.toString())
    ));
  }

  const reviewElements = filteredProductReviews.map((review) => (
    <ReviewCard
      key={review.review_id}
      review={review}
      handleImageClick={handleImageClick}
      handleHelpfulClick={handleHelpfulClick}
    />
  ));

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
      {showModal && (
        <ImageModal
          url={modalImageURL}
          onClick={handleModalClick}
        />
      )}
    </>
  );
}
