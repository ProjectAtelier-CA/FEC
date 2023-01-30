import React from 'react';

export default function StarRepresentation({ averageRating }) {
  return (
    <>
      <h4>StarRepresentation</h4>
      <div className="star-representation">
        <div className="average-rating">
          {Math.round(averageRating * 10) / 10}
        </div>
        <div> Star Meter Component Here</div>
      </div>
    </>
  );
}
