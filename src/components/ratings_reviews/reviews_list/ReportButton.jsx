import React from 'react';
import { MdOutlineReport } from 'react-icons/md';

export default function ReportButton({ reviewID, handleReportClick }) {
  return (
    <div className="report">
      <button type="button" onClick={() => handleReportClick(reviewID)}>
        <div>Report</div>
        <div className="report-icon">{MdOutlineReport()}</div>
      </button>
    </div>
  );
}
