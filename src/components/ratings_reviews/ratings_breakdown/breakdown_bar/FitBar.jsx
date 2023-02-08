import React from 'react';
import { IoTriangle } from 'react-icons/io5';
import { useDarkMode } from '../../../shared/DarkModeProvider';

export default function FitBar({ position }) {
  const isDarkMode = useDarkMode();
  return (
    <div>
      <div>Fit</div>
      <div className="char-bar-container">
        <div className={`char-triangle ${isDarkMode ? 'active-dark' : ''}`} style={{ marginLeft: position }}>{IoTriangle()}</div>
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
      </div>
      <div className="char-bar-traits">
        <div className="trait-container-left">Tight</div>
        <div className="trait-container-middle">Perfect</div>
        <div className="trait-container-right">Loose</div>
      </div>
    </div>
  );
}
