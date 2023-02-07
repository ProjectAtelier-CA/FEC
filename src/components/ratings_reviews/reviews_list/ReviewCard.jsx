import React, { useState } from 'react';
import StarRating from '../../shared/StarRating';
import UserDateInfo from '../../shared/UserDateInfo';
import ReviewCardText from './ReviewCardText';
import RecommendCheck from './RecommendCheck';
import SellerResponse from './SellerResponse';
import ReviewCardPhotos from './ReviewCardPhotos';
import HelpfulButton from './HelpfulButton';
import ReportButton from './ReportButton';

export default function ReviewCard({
  review, handleImageClick, handleHelpfulClick, handleReportClick, debouncedSearch,
}) {
  const shortBodyText = review.body.slice(0, 250); // Don't need state since never changing

  return (
    <div className="review-card">
      <div className="review-star-user">
        <div>
          <StarRating score={review.rating} />
        </div>
        <div className="user-date-info">
          <UserDateInfo date={review.date} user={review.reviewer_name} />
        </div>
      </div>
      <ReviewCardText
        content={shortBodyText}
        fullContent={review.body}
        summary={review.summary}
        debouncedSearch={debouncedSearch}
      />
      { review.recommend ? <RecommendCheck /> : null }
      { review.response ? <SellerResponse response={review.response} /> : null }
      { review.photos.length
        ? <ReviewCardPhotos photos={review.photos} handleImageClick={handleImageClick} /> : null }
      <div className="review-card-buttons">
        <HelpfulButton
          helpfulness={review.helpfulness}
          handleHelpfulClick={handleHelpfulClick}
          reviewID={review.review_id}
        />
        <ReportButton reviewID={review.review_id} handleReportClick={handleReportClick} />
      </div>
    </div>
  );
}
