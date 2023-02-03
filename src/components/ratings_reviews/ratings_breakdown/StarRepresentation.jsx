import React from 'react';
import StarRating from '../../shared/StarRating';

export default function StarRepresentation({ averageRating }) {
  const roundedRating = Math.round(averageRating * 10) / 10
  return (
    <div>
      <div className="star-representation">
        <div className="average-rating">
          {roundedRating}
        </div>
        <div className="star-rating">
          <StarRating score={roundedRating} />
        </div>
      </div>
    </div>
  );
}
