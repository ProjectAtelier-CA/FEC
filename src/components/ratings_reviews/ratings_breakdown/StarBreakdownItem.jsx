import React from 'react';

export default function StarBreakdownItem({ starType, barWidth, handleStarClick }) {
  return (
    <div className="star-breakdown-item">
      <span onClick={() => handleStarClick(starType)} role="button" tabIndex={0}>
        <span>
          {starType}
        </span>
        <span>
          Stars
        </span>
      </span>
      <div className="break-down-bar">
        <div className="gray-bar" />
        <div className="green-bar" style={{ width: 200 * barWidth }} />
      </div>
    </div>
  );
}
