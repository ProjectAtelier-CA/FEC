import React from 'react';
import { IoTriangle } from 'react-icons/io5';
import { useDarkMode } from '../../../shared/DarkModeProvider';

export default function QualityBar({ position }) {
  const isDarkMode = useDarkMode();
  return (
    <div>
      <div>Quality</div>
      <div className="char-bar-container">
        <div className={`char-triangle ${isDarkMode ? 'active-dark' : ''}`} style={{ marginLeft: position }}>{IoTriangle()}</div>
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
      </div>
      <div className="char-bar-traits">
        <div className="trait-container-left">Poor</div>
        <div className="trait-container-middle">Average</div>
        <div className="trait-container-right">Perfect</div>
      </div>
    </div>
  );
}
