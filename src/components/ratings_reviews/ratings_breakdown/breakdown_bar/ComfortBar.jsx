import React from 'react';

export default function ComfortBar() {
  return (
    <div>
      <div>Comfort</div>
      <div className="char-bar-container">
        <div className="char-bar" />
        <div className="char-bar" />
        <div className="char-bar" />
      </div>
      <div className="char-bar-traits">
        <div className="trait-container-left">Uncomfortable</div>
        <div className="trait-container-middle">Average</div>
        <div className="trait-container-right">Perfect</div>
      </div>
    </div>
  );
}
