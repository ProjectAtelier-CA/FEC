import React, { useState, useEffect } from 'react';

export default function ActionButtons({
  handleMoreClick, totalReviews, reviewIndex, setShowReviewModal,
}) {
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    if (reviewIndex >= totalReviews) {
      setShowMore(false);
    }
  }, [reviewIndex]);

  return (
    <div>
      <div>ActionButtons</div>
      {showMore ? <button type="button" onClick={handleMoreClick}>More Reviews</button> : null}
      <button type="button" onClick={() => setShowReviewModal(true)}>Add A Review</button>
    </div>
  );
}
