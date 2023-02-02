import React from 'react';
import StarBreakdownItem from './StarBreakdownItem';

// Todo: Add filter functionality when clicking the star

export default function StarBreakdownList({ totalVotes, ratings, handleStarClick }) {
  // console.log(totalVotes);
  // console.log(ratings['1']);
  // console.log(ratings);
  const barDisplays = [];

  for (let i = 5; i > 0; i -= 1) {
    if (ratings[i]) {
      const barWidth = ratings[i] / totalVotes;
      barDisplays.push(
        <StarBreakdownItem
          key={i}
          starType={i}
          barWidth={barWidth} // Green bar width
          handleStarClick={handleStarClick} // Set star filter from RatingsReviews
        />
      );
    } else {
      barDisplays.push(
        <StarBreakdownItem
          key={i}
          starType={i}
          barWidth="0"
          handleStarClick={handleStarClick}
        />
      );
    }
  }

  return (
    <div className="star-bar-container">
      {barDisplays}
    </div>
  );
}
