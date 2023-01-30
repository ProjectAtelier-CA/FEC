import React, { useState } from 'react';

export default function ReviewsSortMenu({ handleSortClick, numReviews, sortBy, reviewListTopRef }) {
  const [open, setOpen] = useState(false);

  // console.log(numberOfReviews);

  const handleClick = (e) => {
    handleSortClick(e);
    setOpen(false);
    reviewListTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
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
          <button type="button" onClick={() => setOpen(!open)}>{sortBy}</button>
          {open && (
            <div>
              <ul className="sort-menu-item">
                <li>
                  <button type="button" value="relevance" onClick={(e) => handleClick(e)}>relevance</button>
                </li>
                <li>
                  <button type="button" value="newest" onClick={(e) => handleClick(e)}>newest</button>
                </li>
                <li>
                  <button type="button" value="helpful" onClick={(e) => handleClick(e)}>helpful</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
