import React, {useState, useEffect} from 'react';

const Buttons = ({style}) => {

  return (
    <>
      <button className='sizeSelect'>Select Size</button>
      <button className='quantitySelect'>Quantity</button>
      <button className='addToBag'>Add to Bag</button>
      <button className='favorite'>☆</button>
    </>
  )

}

export default Buttons;