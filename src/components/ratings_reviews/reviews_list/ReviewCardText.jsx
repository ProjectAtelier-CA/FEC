import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function ReviewCardText({ content, summary, fullContent, debouncedSearch }) {
  const [currContent, setCurrContent] = useState(content);
  const [showMore, setShowMore] = useState(content.length !== fullContent.length);
  const [showLess, setShowLess] = useState(false);

  const isDarkMode = useDarkMode();
  // do highlighting here in each card.

  const onMoreClick = () => {
    setShowMore(false);
    setShowLess(true);
    setCurrContent(fullContent);
  };

  const onLessClick = () => {
    setShowMore(true);
    setShowLess(false);
    setCurrContent(content);
  };


  return (
    <div>
      { debouncedSearch ? (
        <div className="review-card-summary">
          <Highlighter
            highlightClassName={`highlight-color ${isDarkMode ? 'active-dark' : ''}`}
            searchWords={[debouncedSearch]}
            autoEscape={true}
            textToHighlight={summary}
          />
        </div>
      ) : <div className="review-card-summary">{summary}</div> }
      <div className="review-card-body">
        { debouncedSearch ? (
          <Highlighter
            highlightClassName={`highlight-color ${isDarkMode ? 'active-dark' : ''}`}
            searchWords={[debouncedSearch]}
            autoEscape={true}
            textToHighlight={currContent}
          />
        ) : <div>{currContent}</div> }
        {showMore ? <div className="show-button" onClick={onMoreClick} >Show more...</div> : null }
        {showLess ? <div className="show-button" onClick={onLessClick} >Show less</div> : null }
      </div>
    </div>
  );
}
