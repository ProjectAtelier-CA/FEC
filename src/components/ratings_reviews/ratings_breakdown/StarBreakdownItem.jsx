import React from 'react';

export default function StarBreakdownItem({ starType, barWidth }) {
  return (
    <div className="star-breakdown-item">
      <span>
        {starType}
      </span>
      <span>
        Stars
      </span>
      <div className="break-down-bar">
        <div className="gray-bar" />
        <div className="green-bar" style={{ width: 200 * barWidth }} />
      </div>
    </div>
  );
}
