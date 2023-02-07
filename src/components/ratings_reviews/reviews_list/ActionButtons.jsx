import React, { useState } from 'react';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function ActionButtons({
  handleMoreClick, setShowReviewModal,
  actionButtonsRef, setReviewIndex, setMoreState,
}) {
  const [showMore, setShowMore] = useState(true);
  const [showLess, setShowLess] = useState(false);

  const isDarkMode = useDarkMode();

  const handleEvenMoreClick = () => {
    handleMoreClick();
    setShowMore(false);
    setShowLess(true);
  };

  const handleLessClick = () => {
    setShowMore(true);
    setShowLess(false);
    setReviewIndex(2);
    setMoreState(false);
  };

  return (
    <div className="action-buttons-container" ref={actionButtonsRef}>
      {showMore ? (
        <button className={`${isDarkMode ? 'active-dark' : ''}`} type="button" onClick={handleEvenMoreClick}>
          <div className="more-text">More Reviews</div>
        </button>
      ) : null}
      {showLess ? (
        <button className={`${isDarkMode ? 'active-dark' : ''}`} type="button" onClick={handleLessClick}>
          <div className="more-text">Collapse Reviews</div>
        </button>
      ) : null }
      <button className={`${isDarkMode ? 'active-dark' : ''}`} type="button" onClick={() => setShowReviewModal(true)}>
        <div>
          <div className="add-button-text">Add A Review</div>
          <div className="plus-sign">+</div>
        </div>
      </button>
    </div>
  );
}
