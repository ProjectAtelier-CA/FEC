import React, { useState } from 'react';
import { RiChatCheckFill, RiChatCheckLine } from 'react-icons/ri';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function HelpfulButton({ helpfulness, handleHelpfulClick, reviewID }) {
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);
  const [isClicked, setIsClicked] = useState(false);
  const isDarkMode = useDarkMode();

  const handleClick = () => {
    // console.log('I clicked the helpful button');
    setHelpfulCount((prevCount) => prevCount + 1);
    setIsClicked(true);
    handleHelpfulClick(reviewID);
  };

  return (
    <div className="helpful">
      <span>Helpful?</span>
      <div>
        <button type="button" onClick={!isClicked ? handleClick : null} className={`${!isClicked ? '' : 'helpful-active'} ${isDarkMode ? 'active-dark' : ''}`}>
          <div>Yes</div>
          <div>{RiChatCheckLine()}</div>
        </button>
        <span>{`(${helpfulCount})`}</span>
      </div>
    </div>
  );
}
