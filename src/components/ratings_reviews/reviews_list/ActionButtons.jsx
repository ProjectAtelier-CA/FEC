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
    <div className="action-buttons-container">
      {showMore
        ? (
          <button type="button" onClick={handleMoreClick}>
            <div className="more-text">More Reviews</div>
          </button>
        ) : null}
      <button type="button" onClick={() => setShowReviewModal(true)}>
        <div>
          <div className="add-button-text">Add A Review</div>
          <div className="plus-sign">+</div>
        </div>
      </button>
    </div>
  );
}
