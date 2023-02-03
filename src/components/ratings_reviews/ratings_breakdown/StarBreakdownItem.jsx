import React, { useState, useEffect } from 'react';

export default function StarBreakdownItem({ starType, barWidth, handleStarClick, starFilter }) {
  // console.log(starFilter);
  const [isClicked, setIsClicked] = useState(starFilter[starType]);
  const [clickedClass, setClickedClass] = useState('');
  // console.log(isClicked);

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
        className={"filter-star-button " + clickedClass}
      >
        <div>
          {starType}
        </div>
        <div>
          Stars
        </div>
      </div>
      <div className="break-down-bar">
        <div className="gray-bar" />
        <div className="green-bar" style={{ width: 244 * barWidth }} />
      </div>
    </div>
  );
}
