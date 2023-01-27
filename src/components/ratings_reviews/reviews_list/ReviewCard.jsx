import React from 'react';
import StarMeter from './StarMeter';
import UserDateInfo from './UserDateInfo';
import ReviewCardText from './ReviewCardText';
import RecommendCheck from './RecommendCheck';
import SellerResponse from './SellerResponse';
import ReviewCardPhotos from './ReviewCardPhotos';
import HelpfulButton from './HelpfulButton';
import ReportButton from './ReportButton';

export default function ReviewCard() {
  return (
    <>
      <h5>ReviewCard (Individual Review Card)</h5>
      <div>
        <span>
          <StarMeter />
        </span>
        <span>
          <UserDateInfo />
        </span>
      </div>
      <ReviewCardText />
      <RecommendCheck />
      <SellerResponse />
      <ReviewCardPhotos />
      <div>
        Inner Card Buttons:
        <HelpfulButton />
        <ReportButton />
      </div>
    </>
  );
}
