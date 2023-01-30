import React, { useState, useEffect } from 'react';
// import ProductBreakdownItem from './ProductBreakdownItem';
import SizeBar from './breakdown_bar/SizeBar';
import WidthBar from './breakdown_bar/WidthBar';
import ComfortBar from './breakdown_bar/ComfortBar';
import QualityBar from './breakdown_bar/QualityBar';
import LengthBar from './breakdown_bar/LengthBar';
import FitBar from './breakdown_bar/FitBar';

const calcTrianglePosition = (chars) => {
  const positions = {};
  Object.keys(chars).forEach((char) => {
    positions[char] = (chars[char].value / 5) * 285;
  });
  console.log(positions);
  return positions;
};

export default function ProductBreakdownList({ chars }) {
  const [showSize, setShowSize] = useState(false);
  const [showWidth, setShowWidth] = useState(false);
  const [showComfort, setShowComfort] = useState(false);
  const [showQuality, setShowQuality] = useState(false);
  const [showLength, setShowLength] = useState(false);
  const [showFit, setShowFit] = useState(false);
  const [triPositions, setTriPositions] = useState({});
  console.log(triPositions);

  useEffect(() => {
    if (Object.keys(chars).length) {
      setTriPositions(calcTrianglePosition(chars));
    }
  }, [chars]);

  return (
    <div>
      <h4>ProductBreakdownList (List of bars of characteristics (size) (comfort))</h4>
      <SizeBar position={triPositions.Size} />
      <WidthBar position={triPositions.Width} />
      <ComfortBar position={triPositions.Comfort} />
      <QualityBar position={triPositions.Quality} />
      <LengthBar position={triPositions.Length} />
      <FitBar position={triPositions.Fit} />
    </div>
  );
}
