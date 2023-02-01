import React from 'react';

export default function ReportButton({ reviewID, handleReportClick }) {
  return (
    <span>
      <button type="button" onClick={() => handleReportClick(reviewID)}>Report</button>
    </span>
  );
}
