import React from 'react';
import ReviewCard from './ReviewCard.jsx';
import ActionButtons from './ActionButtons.jsx';

const ReviewsCardList = () => {

  return (
    <>
      <h4>ReviewsCardList (List of Review Cards)</h4>
      <ReviewCard />
      <ReviewCard />
      <br/>
      <ActionButtons />
    </>
  );
}

export default ReviewsCardList;