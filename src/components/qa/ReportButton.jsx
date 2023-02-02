import React from 'react';
import axios from 'axios';

export default function ReportButton({ answerId }) {
  const sendItAway = () => {
    axios.post('http://localhost:8081/report', null, { params: { answerId } });
  };

  return (
    <span>
      <button className="report-button" onClick={sendItAway} type="button"> Report</button>
    </span>
  );
}
