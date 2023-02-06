import React, { useState } from 'react';
import axios from 'axios';

export default function ReportButton({ answerId }) {
  const [isClicked, setClicked] = useState(false);
  const sendItAway = () => {
    setClicked(true);
    axios.post('http://localhost:8081/report', { answerId });
  };

  return (
    <span>
      {!isClicked ? <button className="report-button" onClick={sendItAway} type="button"> Report</button> : null }
      {isClicked ? <button className="report-button" type="button">Reported </button> : null}
    </span>
  );
}
