import React from 'react';

export default function WidthBar() {
  return (
    <div>
      <div>Width</div>
      <div className="char-bar-container">
        <div className="char-bar" />
        <div className="char-bar" />
        <div className="char-bar" />
      </div>
      <div className="char-bar-traits">
        <div className="trait-container-left">Too narrow</div>
        <div className="trait-container-middle">Perfect</div>
        <div className="trait-container-right">Too wide</div>
      </div>
    </div>
  );
}
