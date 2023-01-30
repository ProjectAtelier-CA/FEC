import React, { useState } from 'react';

export default function ReviewsSortMenu({ handleSortClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    handleSortClick(e);
    setOpen(false);
  };

  return (
    <div className="reviews-sort-menu">
      <h4>ReviewsSortMenu</h4>
      <div>
        <div>Sorted by:</div>
        <div>
          <button type="button" onClick={() => setOpen(!open)}>Dropdown Selection</button>
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
