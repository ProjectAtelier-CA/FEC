import React from 'react';
import StarBreakdownItem from './StarBreakdownItem';

// Todo: Add filter functionality when clicking the star

export default function StarBreakdownList({ totalVotes, ratings }) {
  // console.log(totalVotes);
  // console.log(ratings['1']);
  const barDisplays = Object.keys(ratings).reverse().map((rating) => {
    const barWidth = ratings[rating] / totalVotes;
    return (
      <StarBreakdownItem key={rating} starType={rating} barWidth={barWidth} />
    );
  });

  return (
    <div>
      <h4>StarBreakdownList (Filterable Stars)</h4>
      {barDisplays}
    </div>
  );
}
