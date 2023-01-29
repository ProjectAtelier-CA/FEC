import React from 'react';

export default function SizeBar() {
  return (
    <div>
      <div>Size</div>
      <div className="char-bar-container">
        <div className="char-bar" />
        <div className="char-bar" />
        <div className="char-bar" />
      </div>
      <div className="char-bar-traits">
        <div className="trait-container-left">Too small</div>
        <div className="trait-container-middle">Perfect</div>
        <div className="trait-container-right">Too large</div>
      </div>
    </div>
  );
}
