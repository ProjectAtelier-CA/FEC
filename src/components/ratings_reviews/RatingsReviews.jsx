import React, { useEffect, useState } from 'react';
// import { useDarkMode } from '../shared/DarkModeProvider';
import axios from 'axios';
import { GiAmericanShield } from 'react-icons/gi';
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

// Current props needed: productID, productName
export default function RatingsReviews({
  productID, productName, setAppAvgRating, handleTrackClick, reviewsRef,
}) {
  const [productReviews, setProductReviews] = useState([]);
  const [reviewMetaData, setReviewMetaData] = useState({});
  const [starFilter, setStarFilter] = useState(initialStarFilterState);
  const [sortBy, setSortBy] = useState('relevance');
  const [rerender, setRerender] = useState([]); // Solely for re-rendering reviews

  const [loadingMeta, setLoadingMeta] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);


  useEffect(() => {
    axios.get('http://localhost:8081/reviews', {
      params: {
        product_id: productID,
        sort: sortBy,
        count: 500,
      },
    })
      .then(({ data }) => {
        const reviews = data.results;
        setProductReviews([...reviews]);
        setLoadingReviews(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, rerender, productID]);

  useEffect(() => {
    axios.get('http://localhost:8081/reviews/meta', {
      params: {
        product_id: productID,
      },
    })
      .then(({ data }) => {
        setReviewMetaData(data);
        setLoadingMeta(false);
      }).catch((err) => {
        console.log(err);
      });
  // Re-render is triggered on report so we can hot reload
  }, [rerender, productID]);

  const handleStarClick = (starType) => {
    setStarFilter({ ...starFilter, [starType]: !starFilter[starType] });
  };

  const handleSortClick = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      {loadingMeta && (
      <div className="loading-reviews">
        <div className="loading-reviews-icon">{GiAmericanShield()}</div>
        <div>Loading Meta</div>
        <div className="loading-reviews-icon">{GiAmericanShield()}</div>
      </div>
      )}
      {loadingReviews && (
      <div className="loading-reviews">
        <div className="loading-reviews-icon">{GiAmericanShield()}</div>
        <div>Loading Reviews</div>
        <div className="loading-reviews-icon">{GiAmericanShield()}</div>
      </div>
      )}
      {!loadingMeta && !loadingReviews ? (
        <div className='ratings-reviews-master-container' ref={reviewsRef} id="RRScroll">
          <div
            className="ratings-reviews-container"
            onClick={(e) => handleTrackClick(e, 'Ratings and Reviews')}
            data-testid='ratings-reviews-test'
          >
            <RatingsBreakdown
              reviewMetaData={reviewMetaData}
              handleStarClick={handleStarClick}
              starFilter={starFilter}
              setStarFilter={setStarFilter}
              setAppAvgRating={setAppAvgRating}
            />
            <ReviewsList
              productReviews={productReviews}
              starFilter={starFilter}
              handleSortClick={handleSortClick}
              sortBy={sortBy}
              reviewMetaData={reviewMetaData}
              setRerender={setRerender}
              productName={productName}
            />
          </div>
        </div>
      ) : null }
    </>
  );
}
