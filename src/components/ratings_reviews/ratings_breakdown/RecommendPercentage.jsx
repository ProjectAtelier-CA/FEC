import React from 'react';

export default function RecommendPercentage({ percentRec }) {
  const roundedPercent = Math.round(percentRec * 10) / 10;

  return (
    <div className="percent-recommend">
      {roundedPercent}
      % of reviews recommend this product
    </div>
  );
}
