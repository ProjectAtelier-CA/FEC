import React from 'react';
import StarRating from '../../shared/StarRating';
import UserDateInfo from '../../shared/UserDateInfo';
import ReviewCardText from './ReviewCardText';
import RecommendCheck from './RecommendCheck';
import SellerResponse from './SellerResponse';
import ReviewCardPhotos from './ReviewCardPhotos';
import HelpfulButton from './HelpfulButton';
import ReportButton from './ReportButton';

export default function ReviewCard({
  review, handleImageClick, handleHelpfulClick, handleReportClick,
}) {
  // console.log(review);
  // console.log(review);

  return (
    <div className="review-card">
      <div className="review-star-user">
        <div>
          <StarRating score={review.rating} />
        </div>
        <div>
          <UserDateInfo date={review.date} user={review.reviewer_name} />
        </div>
      </div>
      <ReviewCardText content={review.body} summary={review.summary} />
      { review.recommend ? <RecommendCheck /> : null }
      { review.response ? <SellerResponse response={review.response} /> : null }
      { review.photos.length ? <ReviewCardPhotos photos={review.photos} handleImageClick={handleImageClick}/> : null }
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
