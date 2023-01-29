import React, { useState, useEffect } from 'react';
// import ProductBreakdownItem from './ProductBreakdownItem';
import SizeBar from './breakdown_bar/SizeBar';
import WidthBar from './breakdown_bar/WidthBar';
import ComfortBar from './breakdown_bar/ComfortBar';
import QualityBar from './breakdown_bar/QualityBar';
import LengthBar from './breakdown_bar/LengthBar';
import FitBar from './breakdown_bar/FitBar';

export default function ProductBreakdownList({ chars }) {
  const [showSize, setShowSize] = useState(false);
  const [showWidth, setShowWidth] = useState(false);
  const [showComfort, setShowComfort] = useState(false);
  const [showQuality, setShowQuality] = useState(false);
  const [showLength, setShowLength] = useState(false);
  const [showFit, setShowFit] = useState(false);

  return (
    <div>
      <h4>ProductBreakdownList (List of bars of characteristics (size) (comfort))</h4>
      <SizeBar />
      <WidthBar />
      <ComfortBar />
      <QualityBar />
      <LengthBar />
      <FitBar />
    </div>
  );
}
