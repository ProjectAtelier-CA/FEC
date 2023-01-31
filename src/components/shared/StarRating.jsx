import React from 'react';

// take a score from 0 to 5 inclusive
export default function StarRating({ score }) {
  const scales = [];
  // convert score into 5 scales (0 to 1, increment at 0.25)
  for (let i = 1; i <= 5; i += 1) {
    if (i > score && i < score + 1) {
      const scale = 0.25 * Math.round((score - i + 1) / 0.25);
      scales.push(scale);
    } else {
      scales.push(i <= score ? 1 : 0);
    }
  }

  // for each scale, reference a star from StarReference Component
  const starList = scales.map((scale, index) => {
    if (scale === 0.25) scale += 0.1;
    if (scale === 0.75) scale -= 0.1;

    return (
      <svg viewBox="0 0 100 100" key={index}>
        <use href="#star" fill={`url('#star__fill--${scale * 100}')`} />
      </svg>
    );
  });

  // return a DIV of 5 SVG stars
  return <div className="star__rating">{starList}</div>;
};
