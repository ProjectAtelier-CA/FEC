import React from 'react';
import { IoTriangle } from 'react-icons/io5';

export default function FitBar({ position }) {
  return (
    <div>
      <div>Fit</div>
      <div className="char-bar-container">
        <div className="char-triangle" style={{ marginLeft: position }}>{IoTriangle()}</div>
        <div className="char-bar" />
        <div className="char-bar" />
        <div className="char-bar" />
      </div>
      <div className="char-bar-traits">
        <div className="trait-container-left">Runs tight</div>
        <div className="trait-container-middle">Perfect</div>
        <div className="trait-container-right">Runs long</div>
      </div>
    </div>
  );
}
