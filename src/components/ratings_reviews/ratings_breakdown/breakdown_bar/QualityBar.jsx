import React from 'react';

export default function QualityBar() {
  return (
    <div>
      <div>Quality</div>
      <div className="char-bar-container">
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
