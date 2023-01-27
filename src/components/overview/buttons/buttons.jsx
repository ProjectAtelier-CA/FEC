// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Buttons() {
  return (
    <>
      <button type="button" className="sizeSelect">Select Size</button>
      <button type="button" className="quantitySelect">Quantity</button>
      <button type="button" className="addToBag">Add to Bag</button>
      <button type="button" className="favorite">☆</button>
    </>
  );
}

Buttons.propTypes = {
  // props: PropTypes.object.isRequired,
};
