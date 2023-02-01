import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

export default function RecommendCheck() {
  return (
    <div className="recommend-check-container">
      <div>{GiCheckMark()}</div>
      <div>I recommend this product</div>
    </div>
  );
}
