import React, { useState } from 'react';

export default function HelpfulButton({ helpfulness }) {
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setHelpfulCount((prevCount) => prevCount + 1);
    setIsClicked(true);
  };

  return (
    <span>
      <span>Helpful?</span>
      <button type="button" onClick={!isClicked ? handleClick : null}>
        Yes (
        {helpfulCount}
        )
      </button>
    </span>
  );
}
