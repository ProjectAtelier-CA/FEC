/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Buttons() {
  const style = {
    style_id: 220998,
    name: 'Forest Green & Black',
    original_price: '140.00',
    sale_price: null,
    'default?': true,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      },
    ],
    skus: {
      1281032: {
        quantity: 8,
        size: 'XS',
      },
      1281033: {
        quantity: 16,
        size: 'S',
      },
      1281034: {
        quantity: 17,
        size: 'M',
      },
      1281035: {
        quantity: 10,
        size: 'L',
      },
      1281036: {
        quantity: 15,
        size: 'XL',
      },
      1281037: {
        quantity: 4,
        size: 'XL',
      },
    },
  };

  const { skus } = style;
  const [currentSKU, setSKU] = useState(Object.keys(skus)[0]);
  const [size, setSize] = useState('XL');

  function selectSize(event) {
    setSize(event.target.value);
  }

  return (
    <div className="all-buttons">
      <div className="top-buttons">
        {/* <button type="button" className="button sizeSelect dropdown">Select Size</button> */}
        <div className="dropdown">
          <span>Size</span>
          {
          Object.keys(skus).map((sku) => {
            console.log(sku);
            return (
              <div className="dropdown-content">
                <p id={sku} onClick={selectSize}>{skus[sku].size}</p>
              </div>
            );
          })
        }
        </div>
        {/* <button type="button" className="button quantitySelect">Quantity</button> */}
        <div className="dropdown">
          <span>Quantity</span>
          {
            // skus[currentSKU][size]
          // eslint-disable-next-line array-callback-return
          [...Array(skus[currentSKU].quantity).keys()].map((key) => key + 1).map((option) => (
            <div className="dropdown-content">
              <p>{option}</p>
            </div>
          ))
        }
        </div>
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
