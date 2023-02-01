import React from 'react';

export default function ReportButton({ reviewID, handleReportClick }) {
  return (
    <div className="report">
      <button type="button" onClick={() => handleReportClick(reviewID)}>Report</button>
    </div>
  );
}
