import React from 'react';
import StarMeter from './StarMeter.jsx';
import UserDateInfo from './UserDateInfo.jsx';
import ReviewCardText from './ReviewCardText.jsx';
import RecommendCheck from './RecommendCheck.jsx';
import SellerResponse from './SellerResponse.jsx';
import ReviewCardPhotos from './ReviewCardPhotos.jsx';
import HelpfulButton from './HelpfulButton.jsx';
import ReportButton from './ReportButton.jsx';

const ReviewCard = () => {

  return (
    <>
      <h5>ReviewCard (Individual Review Card)</h5>
      <div>
        <span> <StarMeter /> </span>
        <span> <UserDateInfo /> </span>
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

export default ReviewCard;