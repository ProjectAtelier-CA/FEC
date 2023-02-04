import React, { useState } from 'react';

export default function ReviewCardText({ content, summary, fullContent, testHighlight }) {
  const [currContent, setCurrContent] = useState(content);
  const [showMore, setShowMore] = useState(content.length !== fullContent.length);
  const [showLess, setShowLess] = useState(false);

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

  // console.log(testHighlight);

  return (
    <div>
      <div className="review-card-summary">{summary}</div>
      <div className="review-card-body">
        <div>{currContent}</div>
        <div>{testHighlight}</div>
        {showMore ? <div className="show-button" onClick={onMoreClick} >Show more...</div> : null }
        {showLess ? <div className="show-button" onClick={onLessClick} >Show less</div> : null }
      </div>
    </div>
  );
}
