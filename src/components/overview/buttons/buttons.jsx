/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { MdCheckCircleOutline, MdCheckCircle } from 'react-icons/md';

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
        quantity: 0,
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
  const [size, setSize] = useState('Size');
  const [sizeOpened, openSize] = useState(false);
  const [quantityOpened, openQuantity] = useState(false);
  const [quantity, setQuantity] = useState('Count');
  const [gotSize, setSizeStatus] = useState(false);
  const [addedToBag, setBagged] = useState(false);
  const iff = (condition, then, otherwise) => (condition ? then : otherwise);

  function selectSize(event) {
    setSizeStatus(true);
    setSize(event.target.value);
    setSKU(event.target.id);
  }

  function sizeClick() {
    openSize(!sizeOpened);
  }

  function quantityClick() {
    openQuantity(!quantityOpened);
  }

  function optionClick(event) {
    setQuantity(event.target.id);
  }

  function addToBag() {
    if (quantity > 0) {
      setBagged(true);
    } else if (!gotSize) {
      openSize(true);
    } else {
      openQuantity(true);
    }
  }

  useEffect(() => {
    setQuantity(0);
  }, [size]);

  return (
    <div className="all-buttons">
      <div className="top-buttons">
        {/* <button type="button" className="button sizeSelect dropdown">Select Size</button> */}
        <div className="dropdown" onClick={sizeClick}>
          <button type="button" className="size button">
            {sizeOpened
              ? 'Select size'
              : iff(skus[currentSKU].quantity > 0, size, <span className="no-stock">
                {size}
                {' '}
                -
                {' '}
                out of stock
              </span>)}
            {/* {
              iff(skus[currentSKU].quantity > 0, size, <span className="no-stock">
                {size}
                {' '}
                -
                {' '}
                out of stock
                                                     </span>)
            } */}
          </button>
          <ul className="dropdown-list">
            {
                sizeOpened
                  ? (Object.keys(skus).map((sku) => (
                    // <div className="dropdown-content">
                    <button
                      id={sku}
                      type="button"
                      onClick={selectSize}
                      value={skus[sku].size}
                      className="dropdown-content size-option"
                    >
                      {skus[sku].size}
                    </button>
                    // </div>
                  ))
                  ) : null
            }
          </ul>
        </div>
        {/* <button type="button" className="button quantitySelect">Quantity</button> */}
        <div className="dropdown" onClick={quantityClick} data-testid="test">
          {
            // eslint-disable-next-line no-nested-ternary
            skus[currentSKU].quantity > 0
              ? (
                quantity > 0
                  ? (<button type="button" className="button quantity">{quantity}</button>)
                  : (<button type="button" className="button quantity">-</button>)
              )
              : null
          }
          <ul className="dropdown-list">
            {
              quantityOpened
                ? (
                  // eslint-disable-next-line max-len
                  [...Array(Math.min(skus[currentSKU].quantity, 15)).keys()].map((key) => key + 1).map((option) => (
                    <button type="button" id={option} value={option} className="dropdown-content quantity-option" onClick={optionClick}>
                      {option}
                    </button>
                  ))
                ) : null
          }
          </ul>
        </div>
      </div>
      <div className="bottom-buttons">
        {
          addedToBag
            ? (
              <button type="button" className="button added" disabled>
                Added to bag!
                {' '}
                <MdCheckCircle className="bag-check" />
              </button>
            )
            : (<button type="button" className="button addToBag" onClick={addToBag}>Add to bag</button>)
        }
        <button type="button" className="button favorite">&#9734;</button>
      </div>
    </div>
  );
}
