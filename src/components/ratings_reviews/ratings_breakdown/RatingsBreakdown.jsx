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

export default function RatingsBreakdown({ reviewMetaData }) {
  const [totalVotes, setTotalVotes] = useState(0);
  const [averageRating, setAverageRating] = useState(5);
  const [percentRec, setPercentRec] = useState(100);
  const [ratings, setRatings] = useState({});
  const [chars, setChars] = useState({});
  // console.log(reviewMetaData);

  useEffect(() => {
    if (Object.keys(reviewMetaData).length) {
      const calcRatings = calcAverageRating(reviewMetaData.ratings);
      setAverageRating(calcRatings.averageScore);
      setTotalVotes(calcRatings.totalVotes);
      setPercentRec(calcRecommended(reviewMetaData.recommended) * 100);
      setRatings(reviewMetaData.ratings);
      setChars(reviewMetaData.characteristics);
    }
  }, [reviewMetaData]);

  return (
    <div className="ratings-breakdown">
      <h2>RatingsBreakdown (Left Container)</h2>
      <h4>Ratings and Review</h4>
      <StarRepresentation averageRating={averageRating} />
      <RecommendPercentage percentRec={percentRec} />
      <StarBreakdownList totalVotes={totalVotes} ratings={ratings} />
      <ProductBreakdownList chars={chars} />
    </div>
  );
}
