import React from 'react';

// steps to calculate coordinates combinations for SVG stetching
// 10% offset, 1-to-2 ratio between inner and outer radius
const starPathGenerator = () => {
  const [innerRadius, outerRadius, rotation] = [22.5, 45, Math.PI / 5];
  const points = [];

  for (let i = 0; i < 10; i += 1) {
    const R = (i & 1) ? innerRadius : outerRadius;
    const x = R * Math.cos(i * rotation) + 50;
    const y = R * Math.sin(i * rotation) + 50;
    // round floating to 2 decimals for better performance
    points.push(`${Math.round(x * 100) / 100},${Math.round(y * 100) / 100}`);
  }
  // return a points string looks like '100,40 205,-30 33,35'
  return points.join(' ');
};

// This component should live at the top of App,
// and only rendered once for reference only
export default function StarReference() {
  // 5 different SVG fill rules based on 5 different star scale
  const starFillDefs = [0, 25, 50, 75, 100].map((scale) => {
    const props = {
      key: scale,
      id: `star__fill--${scale}`,
      gradientTransform: 'rotate(90)',
    };

    return (
      <linearGradient {...props}>
        <stop offset={`${scale}%`} />
        <stop offset={`${scale}%`} />
      </linearGradient>
    );
  });
  // rotate to make star look upstraight
  const polygonStyle = {
    id: 'star',
    points: starPathGenerator(),
    transform: 'rotate(-90 50 50)',
  };

  // though this reference is also a svg, we will hide it from client using CSS
  return (
    <svg id="star__reference" viewBox="0 0 100 100">
      <defs>
        {starFillDefs}
        <polygon {...polygonStyle} />
      </defs>
    </svg>
  );
}
// I love props spreading and I strongly advise you guys use it thought linter complain...
