import React, { useState, useEffect } from 'react';
import { BsTags, BsTag } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import { useDarkMode } from '../../shared/DarkModeProvider';
import StarBreakdownItem from './StarBreakdownItem';


export default function StarBreakdownList({
  totalVotes, ratings, handleStarClick, starFilter, setStarFilter,
}) {
  const isDarkMode = useDarkMode();
  const barDisplays = [];

  for (let i = 5; i > 0; i -= 1) {
    if (ratings[i]) {
      const barWidth = ratings[i] / totalVotes;
      barDisplays.push(
        <StarBreakdownItem
          key={i}
          starType={i}
          barWidth={barWidth} // Green bar width
          handleStarClick={handleStarClick} // Set star filter from RatingsReviews
          starFilter={starFilter}
        />
      );
    } else {
      barDisplays.push(
        <StarBreakdownItem
          key={i}
          starType={i}
          barWidth="0"
          handleStarClick={handleStarClick}
          starFilter={starFilter}
        />
      );
    }
  }


  // For my filter tags
  const starKeys = Object.keys(starFilter);
  const filterTags = [];
  starKeys.forEach((key) => { // Key is string number
    if (starFilter[key]) {
      filterTags.push(
        <div key={key} onClick={() => handleStarClick(key)} className="tag-container">
          <div className="small-tag">
            <div className="tag">{BsTag()}</div>
            <div className="text">
              <div>{key}</div>
              <div className="text-star">{FaRegStar()}</div>
            </div>
          </div>
        </div>,
      );
    }
  });

  const handleBigTagClick = () => {
    const resetFilter = {};
    for (const key in starFilter) {
      resetFilter[key] = false;
    }
    // Resets filter to original state (all false);
    setStarFilter({ ...starFilter, ...resetFilter });
  };

  return (
    <div className="star-bar-container">
      <div>
        {barDisplays}
      </div>
      { filterTags.length
        ? (
          <div className={`star-filter-tags ${isDarkMode ? 'active-dark' : ''}`}>
            <div className="big-tag" onClick={() => handleBigTagClick()}>{BsTags()}</div>
            <div className="tag-filters">{filterTags.reverse()}</div>
          </div>
        )
        : null }
    </div>
  );
}
