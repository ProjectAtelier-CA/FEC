/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { MdCheckCircleOutline, MdCheckCircle } from 'react-icons/md';

export default function Buttons({
  styles, currentStyle, styleObject, setSkus, skus, isLoading, currentSku, setSku,
}) {
  // const style = styles[currentStyle];
  // const { skus } = style;
  const [style, updateStyle] = useState(styles[0]);
  // const [skus, setSkus] = useState(style.skus);
  // const [currentSKU, setSKU] = useState(Object.keys(skus)[0]);
  const [loading, setLoading] = useState(true);

  const [size, setSize] = useState('Size');
  const [sizeOpened, openSize] = useState(false);
  const [quantityOpened, openQuantity] = useState(false);
  const [quantity, setQuantity] = useState('Count');
  const [gotSize, setSizeStatus] = useState(false);
  const [addedToBag, setBagged] = useState(false);
  const iff = (condition, then, otherwise) => (condition ? then : otherwise);

  // useEffect(() => {
  //   console.log('style is now', styleObject);
  //   setLoading(true);

  //   if (styleObject !== undefined) {
  //     console.log('here');
  //     setSkus(styleObject.skus);
  //   }
  // }, [styleObject]);

  // useEffect(() => {
  //   console.log(skus);
  //   if (skus !== undefined) {
  //     console.log('here');
  //     setSKU(Object.keys(skus)[0]);
  //   }
  // }, [skus]);

  useEffect(() => {
    setSize('Size');
    setQuantity(0);
  }, [currentStyle]);

  // useEffect(() => {
  //   console.log('SKU');
  //   setSKU(Object.keys(skus)[0]);
  // }, [skus]);

  useEffect(() => {
    setQuantity(0);
  }, [size]);

  function selectSize(event) {
    setSizeStatus(true);
    setSize(event.target.value);
    setSku(event.target.id);
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
    if (skus[currentSku] !== undefined) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [currentSku]);

  if (Object.keys(skus).length === 0) {
    console.log('here');
    return (
      <div>Loading...</div>
    );
  }

  if (loading) {
    return (
      <div className="overview-loader" />
    );
  }

  return (
    <div className="all-buttons">
      <div className="top-buttons">
        {/* <button type="button" className="button sizeSelect dropdown">Select Size</button> */}
        <div className="dropdown" onClick={sizeClick}>
          <button type="button" className="size button">
            {sizeOpened
              ? 'Select size'
              : iff(skus[currentSku].quantity > 0, size, <span className="no-stock">
                {size}
                {' '}
                -
                {' '}
                out of stock
              </span>)}
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
        <div className="dropdown" onClick={quantityClick} data-testid="test">
          {
            // eslint-disable-next-line no-nested-ternary
            skus[currentSku].quantity > 0
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
                  [...Array(Math.min(skus[currentSku].quantity, 15)).keys()].map((key) => key + 1).map((option) => (
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
