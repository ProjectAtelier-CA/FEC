import React from 'react';
import StarRepresentation from './StarRepresentation';
import RecommendPercentage from './RecommendPercentage';
import StarBreakdownList from './StarBreakdownList';
import ProductBreakdownList from './ProductBreakdownList';

export default function RatingsBreakdown() {
  return (
    <div>
      <h2>RatingsBreakdown (Left Container)</h2>
      <h4>Ratings and Review</h4>
      <StarRepresentation />
      <RecommendPercentage />
      <StarBreakdownList />
      <ProductBreakdownList />
    </div>
  );
}
