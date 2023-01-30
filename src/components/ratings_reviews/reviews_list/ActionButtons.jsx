import React, { useState, useEffect } from 'react';

export default function ActionButtons({
  handleMoreClick, totalReviews, reviewIndex, setShowReviewModal,
}) {
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    // Conditional check for our show more button
    // According to both reviewIndex and our current totalReviews (changes on filter)
    if (reviewIndex >= totalReviews) {
      setShowMore(false);
    } else if (reviewIndex < totalReviews) {
      setShowMore(true);
    }
  }, [reviewIndex, totalReviews]);

  return (
    <div>
      <div>ActionButtons</div>
      {showMore ? <button type="button" onClick={handleMoreClick}>More Reviews</button> : null}
      <button type="button" onClick={() => setShowReviewModal(true)}>Add A Review</button>
    </div>
  );
}
