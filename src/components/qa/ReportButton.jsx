import React, { useState, useEffect } from 'react';

export default function ReportButton() {
  const [reported, setReported] = useState(false);
  const makeItRed = () => {
    setReported(true);
  };
  return (
    <>
      {reported ? <div className="reported-qa">REPORTED </div> : null }
      {!reported ? <button className="report-button" onClick={makeItRed} type="button"> Report</button> : null}
    </>
  );
}
