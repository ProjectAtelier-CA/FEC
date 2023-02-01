import React, { useState } from 'react';

export default function ReviewsSortMenu({ handleSortClick, numReviews, reviewListTopRef }) {
  const handleClick = (e) => {
    handleSortClick(e);
    setTimeout(() => {
      // Sometimes the reviews list jumps when clicking by sort. Figure out why.
      reviewListTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }, 200);
  };

  return (
    <div>
      <h4>ReviewsSortMenu</h4>
      <div className="reviews-sort-menu">
        <div className="number-of-reviews">
          {numReviews}
        </div>
        <div>
          Reviews sorted by:
        </div>
        <div>
          <select onChange={(e) => handleClick(e)}>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
      </div>
    </div>
  );
}
