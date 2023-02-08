import React, { useState, useEffect } from 'react';
import StarRepresentation from './StarRepresentation';
import RecommendPercentage from './RecommendPercentage';
import StarBreakdownList from './StarBreakdownList';
import ProductBreakdownList from './ProductBreakdownList';

const calcAverageRating = (ratings) => {
  let sum = 0;
  let totalVotes = 0;

  for (const key in ratings) {
    const value = Number(key);
    sum += value * ratings[key];
    totalVotes += Number(ratings[key]);
  }

  const averageScore = sum / totalVotes;
  return { averageScore, totalVotes };
};

const calcRecommended = (recommended) => {
  const trueCount = Number(recommended.true);
  const totalCount = Number(recommended.false) + trueCount;
  return trueCount / totalCount;
};

export default function RatingsBreakdown({
  reviewMetaData, handleStarClick, starFilter, setStarFilter, setAppAvgRating
}) {
  const [totalVotes, setTotalVotes] = useState(0);
  const [averageRating, setAverageRating] = useState(5);
  const [percentRec, setPercentRec] = useState(100);
  const [ratings, setRatings] = useState({});
  const [chars, setChars] = useState({});

  // console.log(starFilter);

  useEffect(() => {
    if (Object.keys(reviewMetaData).length) {
      const calcRatings = calcAverageRating(reviewMetaData.ratings);
      setAppAvgRating(calcRatings.averageScore); // Setting Apps Average Rating too
      setAverageRating(calcRatings.averageScore);
      setTotalVotes(calcRatings.totalVotes);
      setPercentRec(calcRecommended(reviewMetaData.recommended) * 100);
      setRatings(reviewMetaData.ratings);
      setChars(reviewMetaData.characteristics);
    }
  }, [reviewMetaData]);

  return (
    <div data-testid="ratings-breakdown-test">
      {Object.keys(reviewMetaData).length > 0
        ? (
          <div className="ratings-breakdown">
            <h4>Ratings and Reviews</h4>
            <StarRepresentation averageRating={averageRating} />
            <RecommendPercentage percentRec={percentRec} />
            <StarBreakdownList
              totalVotes={totalVotes}
              ratings={ratings}
              handleStarClick={handleStarClick}
              starFilter={starFilter}
              setStarFilter={setStarFilter}
            />
            <ProductBreakdownList chars={chars} />
          </div>
        ) : null}
    </div>
  );
}
