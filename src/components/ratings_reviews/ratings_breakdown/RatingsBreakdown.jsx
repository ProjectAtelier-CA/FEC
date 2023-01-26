import React from 'react';
import StarRepresentation from './StarRepresentation.jsx';
import RecommendPercentage from './RecommendPercentage.jsx';
import StarBreakdownList from './StarBreakdownList.jsx';
import ProductBreakdownList from './ProductBreakdownList.jsx';

const RatingsBreakdown = () => {

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

export default RatingsBreakdown;