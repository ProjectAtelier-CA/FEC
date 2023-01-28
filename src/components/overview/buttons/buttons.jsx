// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Buttons() {
  return (
    <div className="all-buttons">
      <div className="top-buttons">
        <button type="button" className="button sizeSelect">Select Size</button>
        <button type="button" className="button quantitySelect">Quantity</button>
      </div>
      <div className="bottom-buttons">
        <button type="button" className="button addToBag">Add to Bag</button>
        <button type="button" className="button favorite">&#9734;</button>
      </div>
    </div>
  );
}

Buttons.propTypes = {
  // props: PropTypes.object.isRequired,
};
