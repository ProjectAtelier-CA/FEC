import React from 'react';
import { IoTriangle } from 'react-icons/io5';
import { useDarkMode } from '../../../shared/DarkModeProvider';

export default function SizeBar({ position }) {
  const isDarkMode = useDarkMode();
  return (
    <div>
      <div>Size</div>
      <div className="char-bar-container">
        <div className={`char-triangle ${isDarkMode ? 'active-dark' : ''}`} style={{ marginLeft: position }}>{IoTriangle()}</div>
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
        <div className={`char-bar ${isDarkMode ? 'active-dark' : ''}`} />
      </div>
      <div className="char-bar-traits">
        <div className="trait-container-left">Too small</div>
        <div className="trait-container-middle">Perfect</div>
        <div className="trait-container-right">Too large</div>
      </div>
    </div>
  );
}
