import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export default function ReviewsSortMenu({
  handleSortClick, numReviews, reviewListTopRef, searchInput, setSearchInput,
}) {
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = (e) => {
    handleSortClick(e);
    setTimeout(() => {
      // Sometimes the reviews list jumps when clicking by sort. Figure out why.
      reviewListTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }, 200);
  };

  const handleIconClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="sort-menu-container">
      {/* <h4>ReviewsSortMenu</h4> */}
      <div className="reviews-sort-menu">
        <div className="number-of-reviews">
          {numReviews}
        </div>
        <div>
          reviews sorted by
        </div>
        <div className="sort-selections">
          <select onChange={(e) => handleClick(e)}>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
      </div>
      <div className="search-input-bar">
        {showSearch
          ? <input type="text" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          : null }
        <div className="search-icon" onClick={handleIconClick}>{BiSearchAlt()}</div>
      </div>
    </div>
  );
}
