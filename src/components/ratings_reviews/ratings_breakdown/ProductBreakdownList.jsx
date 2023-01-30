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
  return positions;
};

// const renderCharBars = (currChar) => {
//   if (currChar === 'Size') {
//     setShowSize(true);
//   } else if (currChar === 'Width') {
//     setShowWidth(true);
//   } else if (currChar === 'Comfort') {
//     setShowComfort(true);
//   } else if (currChar === 'Quality') {
//     setShowQuality(true);
//   } else if (currChar === 'Length') {
//     setShowLength(true);
//   } else if (currChar === 'Fit') {
//     setShowFit(true);
//   }
// };

export default function ProductBreakdownList({ chars }) {
  const [showSize, setShowSize] = useState(false);
  const [showWidth, setShowWidth] = useState(false);
  const [showComfort, setShowComfort] = useState(false);
  const [showQuality, setShowQuality] = useState(false);
  const [showLength, setShowLength] = useState(false);
  const [showFit, setShowFit] = useState(false);
  const [triPositions, setTriPositions] = useState({});

  const renderCharBars = (currChar) => {
    if (currChar === 'Size') {
      setShowSize(true);
    } else if (currChar === 'Width') {
      setShowWidth(true);
    } else if (currChar === 'Comfort') {
      setShowComfort(true);
    } else if (currChar === 'Quality') {
      setShowQuality(true);
    } else if (currChar === 'Length') {
      setShowLength(true);
    } else if (currChar === 'Fit') {
      setShowFit(true);
    }
  };

  useEffect(() => {
    const currChars = Object.keys(chars); // List of characteristics for product
    if (currChars.length) {
      setTriPositions(calcTrianglePosition(chars));
      currChars.forEach((char) => {
        renderCharBars(char);
      });
    }
  }, [chars]);

  return (
    <div>
      <h4>ProductBreakdownList (List of bars of characteristics (size) (comfort))</h4>
      { showSize ? <SizeBar position={triPositions.Size} /> : null }
      { showWidth ? <WidthBar position={triPositions.Width} /> : null }
      { showComfort ? <ComfortBar position={triPositions.Comfort} /> : null }
      { showQuality ? <QualityBar position={triPositions.Quality} /> : null }
      { showLength ? <LengthBar position={triPositions.Length} /> : null }
      { showFit ? <FitBar position={triPositions.Fit} /> : null }
    </div>
  );
}
