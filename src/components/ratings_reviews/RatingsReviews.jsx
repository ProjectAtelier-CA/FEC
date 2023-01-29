import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingsBreakdown from './ratings_breakdown/RatingsBreakdown';
import ReviewsList from './reviews_list/ReviewsList';
import '../../styles/ratings_reviews_styles/rrstyles.scss';

export default function RatingsReviews({ productID }) {
  const [productReviews, setProductReviews] = useState([]);
  const [reviewMetaData, setReviewMetaData] = useState({});

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

  return (
    <>
      <h1>RatingsReviews Component</h1>
      <RatingsBreakdown reviewMetaData={reviewMetaData} />
      { productReviews.length ? <ReviewsList productReviews={productReviews} /> : null }
    </>
  );
}

// RatingsReviews.propTypes = {
//   productID: PropTypes.number,
// }
