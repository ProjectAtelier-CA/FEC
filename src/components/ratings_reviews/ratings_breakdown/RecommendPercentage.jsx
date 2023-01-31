import React from 'react';

export default function RecommendPercentage({ percentRec }) {
  const roundedPercent = Math.round(percentRec * 10) / 10;

  return (
    <>
      <h4>RecommendPercentage</h4>
      <div>
        {roundedPercent}
        % of reviews recommend this product
      </div>

    </>
  );
}
