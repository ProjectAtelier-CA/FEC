import React from 'react';
import ReviewCard from './ReviewCard';
import ActionButtons from './ActionButtons';

export default function ReviewsCardList() {
  return (
    <>
      <h4>ReviewsCardList (List of Review Cards)</h4>
      <ReviewCard />
      <ReviewCard />
      <br />
      <ActionButtons />
    </>
  );
}
