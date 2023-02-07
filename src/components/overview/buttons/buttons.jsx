/* eslint-disable camelcase */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { MdCheckCircleOutline, MdCheckCircle } from 'react-icons/md';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function Buttons({
  styles, currentStyle, styleObject, setSkus, skus, isLoading, currentSku, setSku, product_id,
}) {
  const [style, updateStyle] = useState(styles[0]);
  const [loading, setLoading] = useState(true);

  const [size, setSize] = useState('Size');
  const [sizeOpened, openSize] = useState(false);
  const [quantityOpened, openQuantity] = useState(false);
  const [quantity, setQuantity] = useState('Count');
  const [gotSize, setSizeStatus] = useState(false);
  const [addedToBag, setBagged] = useState(false);
  const [favorite, addFavorite] = useState(false);
  const [favorites, setFavorites] = useState({});
  const iff = (condition, then, otherwise) => (condition ? then : otherwise);
  const isDark = useDarkMode();

  useEffect(() => {
    setSize('Size');
    setQuantity(0);
    setBagged(false);
  }, [currentStyle]);

  useEffect(() => {
    setQuantity(0);
  }, [size]);

  useEffect(() => {
    if (addedToBag) {
      console.log(`Purchasing SKU ${currentSku} with count ${quantity}`);
    } else {
      console.log('removed');
    }
  }, [addedToBag]);

  useEffect(() => {
    if (addedToBag) {
      console.log(`Purchasing SKU ${currentSku} with count ${quantity}`);
    } else {
      console.log(`Removed ${currentSku} from bag`);
    }
  }, [addedToBag]);

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
    if (addedToBag) {
      setBagged(false);
    } else if (quantity > 0) {
      setBagged(true);
    } else if (!gotSize) {
      openSize(true);
    } else {
      openQuantity(true);
    }
  }

  function handleFavorite() {
    addFavorite(!favorite);
    const object = favorites;
    if (object[product_id] === undefined) {
      object[product_id] = 1;
    } else {
      delete object[product_id];
    }
    setFavorites(object);
  }

  useEffect(() => {
    if (favorites[product_id] !== undefined) {
      if (favorites[product_id] === 1) {
        addFavorite(true);
      } else {
        addFavorite(false);
      }
    } else {
      addFavorite(false);
    }
  }, [favorites, product_id]);

  useEffect(() => {
    if (skus[currentSku] !== undefined) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [currentSku]);

  useEffect(() => {
    setSize('Size');
    setQuantity(0);
    setBagged(false);
  }, [product_id]);
  useEffect(() => {
    setSize('Size');
    setQuantity(0);
    setBagged(false);
  }, [product_id]);

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
          <button type="button" className={`size button ${isDark ? 'dark-mode-button' : 'light-mode-button'}`}>
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
                    <button
                      id={sku}
                      type="button"
                      onClick={selectSize}
                      value={skus[sku].size}
                      className="dropdown-content size-option"
                    >
                      {skus[sku].size}
                    </button>
                  ))
                  ) : null
            }
          </ul>
        </div>
        <div className="dropdown" onClick={quantityClick}>
          {
            // eslint-disable-next-line no-nested-ternary
            skus[currentSku].quantity > 0
              ? (
                quantity > 0
                  ? (<button type="button" className={`button quantity ${isDark ? 'dark-mode-button' : 'light-mode-button'}`}>{quantity}</button>)
                  : (<button type="button" className={`button quantity ${isDark ? 'dark-mode-button' : 'light-mode-button'}`}>-</button>)
              )
              : null
          }
          <ul className="dropdown-list">
            {
              (quantityOpened && size !== 'Size')
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
              <button type="button" className="button added" onClick={addToBag}>
                Added to bag!
                {' '}
                <MdCheckCircle className="bag-check" />
              </button>
            )
            : (<button type="button" className="button addToBag" onClick={addToBag}>Add to bag</button>)
        }
        <button type="button" className="button favorite" onClick={handleFavorite}>
          {
            favorite
              ? <BsStarFill className="favorite-star" />
              : <BsStar className="favorite-star" />
          }
        </button>
      </div>
    </div>
  );
}
