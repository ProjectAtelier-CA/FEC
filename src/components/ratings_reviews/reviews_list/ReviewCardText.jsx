import React from 'react';

export default function ReviewCardText({ content, summary }) {
  return (
    <>
      {/* <div>Review Card Text</div> */}
      <div className="review-card-summary">{summary}</div>
      <div className="review-card-body">{content}</div>
    </>
  );
}
