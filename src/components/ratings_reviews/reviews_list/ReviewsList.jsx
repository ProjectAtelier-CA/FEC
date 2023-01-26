import React from 'react';
import ReviewsSortMenu from './ReviewsSortMenu.jsx';
import ReviewsCardList from './ReviewsCardList.jsx';


const ReviewsList = () => {

  return (
    <>
      <h2>Reviews List (Right Container)</h2>
      <ReviewsSortMenu />
      <ReviewsCardList />
    </>
  );
}

export default ReviewsList;