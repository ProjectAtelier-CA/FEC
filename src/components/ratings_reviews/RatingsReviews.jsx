import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingsBreakdown from './ratings_breakdown/RatingsBreakdown';
import ReviewsList from './reviews_list/ReviewsList';
import '../../styles/ratings_reviews_styles/rrstyles.scss';

const initialStarFilterState = {
  5: false,
  4: false,
  3: false,
  2: false,
  1: false,
};

export default function RatingsReviews({ productID }) {
  const [productReviews, setProductReviews] = useState([]);
  const [reviewMetaData, setReviewMetaData] = useState({});
  const [starFilter, setStarFilter] = useState(initialStarFilterState);
  // console.log(starFilter);

  useEffect(() => {
    axios.get('http://localhost:8081/reviews').then(({ data }) => {
      const reviews = data.results;
      // reviews will be an array of objects
      setProductReviews([...productReviews, ...reviews]);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8081/reviews/meta').then(({ data }) => {
      setReviewMetaData(data);
    });
  }, []);

  const handleStarClick = (starType) => {
    setStarFilter({ ...starFilter, [starType]: !starFilter[starType] });
  };

  return (
    <>
      <h1>RatingsReviews Component</h1>
      <RatingsBreakdown reviewMetaData={reviewMetaData} handleStarClick={handleStarClick} />
      { productReviews.length
        ? <ReviewsList productReviews={productReviews} starFilter={starFilter} />
        : null }
    </>
  );
}

// RatingsReviews.propTypes = {
//   productID: PropTypes.number,
// }
