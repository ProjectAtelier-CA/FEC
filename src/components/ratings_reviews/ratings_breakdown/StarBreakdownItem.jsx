import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function StarBreakdownItem({ starType, barWidth, handleStarClick, starFilter }) {
  // console.log(starFilter);
  const [isClicked, setIsClicked] = useState(starFilter[starType]);
  const [clickedClass, setClickedClass] = useState('');
  // console.log(isClicked);
  const isDarkMode = useDarkMode();
  // console.log(isDarkMode);

  useEffect(() => {
    setIsClicked(starFilter[starType]);
  }, [starFilter]);

  useEffect(() => {
    if (isClicked) {
      setClickedClass('filter-active');
    } else {
      setClickedClass('');
    }
  }, [isClicked]);

  const handleClick = (type) => {
    handleStarClick(type);
    // setIsClicked(!isClicked);
  };

  return (
    <div className="star-breakdown-item">
      <div
        onClick={() => handleClick(starType)}
        role="button" tabIndex={0}
        className={`filter-star-button ${clickedClass} ${isDarkMode ? 'active-dark' : ''}`}
      >
        <div>
          {starType}
        </div>
        <div>
          Stars
        </div>
      </div>
      <div className="break-down-bar">
        <div className={`gray-bar ${isDarkMode ? 'active-dark' : ''}`} />
        <div className={`green-bar ${isDarkMode ? 'active-dark' : ''}`} style={{ width: 244 * barWidth }} />
      </div>
    </div>
  );
}
