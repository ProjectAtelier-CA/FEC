import React from 'react';
import StarRating from '../../shared/StarRating';
import UserDateInfo from './UserDateInfo';
import ReviewCardText from './ReviewCardText';
import RecommendCheck from './RecommendCheck';
import SellerResponse from './SellerResponse';
import ReviewCardPhotos from './ReviewCardPhotos';
import HelpfulButton from './HelpfulButton';
import ReportButton from './ReportButton';

export default function ReviewCard({ review }) {
  // console.log(review);
  return (
    <div className="review-card">
      <h5>ReviewCard (Individual Review Card)</h5>
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
      <ReviewCardPhotos photos={review.photos} />
      <div>
        Inner Card Buttons:
        <HelpfulButton helpfulness={review.helpfulness} />
        <ReportButton />
      </div>
    </div>
  );
}
