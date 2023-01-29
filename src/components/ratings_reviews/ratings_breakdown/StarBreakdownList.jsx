import React from 'react';
import StarBreakdownItem from './StarBreakdownItem';

export default function StarBreakdownList({ totalVotes, ratings }) {
  // console.log(totalVotes);
  // console.log(ratings['1']);
  const barDisplays = Object.keys(ratings).reverse().map((rating) => {
    const barWidth = ratings[rating] / totalVotes;
    return (
      <StarBreakdownItem key={rating} starType={rating} barWidth={barWidth} />
    )
  });

  return (
    <div>
      <h4>StarBreakdownList (Filterable Stars)</h4>
      {barDisplays}
      {/* <StarBreakdownItem starType="5 " />
      <StarBreakdownItem starType="4 " />
      <StarBreakdownItem starType="3 " />
      <StarBreakdownItem starType="2 " />
      <StarBreakdownItem starType="1 " /> */}
    </div>
  );
}
