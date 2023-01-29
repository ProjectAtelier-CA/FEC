import React from 'react';
import { IoTriangle } from 'react-icons/io5';

export default function QualityBar({ position }) {
  return (
    <div>
      <div>Quality</div>
      <div className="char-bar-container">
        <div className="char-triangle" style={{ marginLeft: position }}>{IoTriangle()}</div>
        <div className="char-bar" />
        <div className="char-bar" />
        <div className="char-bar" />
      </div>
      <div className="char-bar-traits">
        <div className="trait-container-left">Poor</div>
        <div className="trait-container-middle">Average</div>
        <div className="trait-container-right">Perfect</div>
      </div>
    </div>
  );
}
