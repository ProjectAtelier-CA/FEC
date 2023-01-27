import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingsBreakdown from './ratings_breakdown/RatingsBreakdown';
import ReviewsList from './reviews_list/ReviewsList';
import '../../styles/ratings_reviews_styles/rrstyles.scss';

export default function RatingsReviews({ productID }) {
  const [productReviews, setProductReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/reviews').then(({ data }) => {
      const reviews = data.results;
      // reviews will be an array of objects
      setProductReviews(...productReviews, ...reviews);
    });
  }, []);

  return (
    <>
      <h1>RatingsReviews Component</h1>
      <RatingsBreakdown />
      <ReviewsList />
    </>
  );
}

// RatingsReviews.propTypes = {
//   productID: PropTypes.number,
// }
