/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Styles({
  setIndex, styles, currentStyle, setStyle,
}) {
  // const [currentStyle, setStyle] = useState(0);

  const indeces = [0];
  styles.forEach((style) => {
    const N = indeces.length;
    indeces.push(indeces[N - 1] + style.photos.length);
  });
  // eslint-disable-next-line no-unused-vars
  // const [styles[imageIndex], setStyle] = useState(styles[0]);
  // const style = styles[imageIndex];

  function handleClick(event) {
    console.log(indeces[event.target.id]);
    setStyle(event.target.id);
    setIndex(indeces[event.target.id]);
  }

  return (
    <div className="styles">
      <h4 className="price">
        {styles[currentStyle].sale_price === null
          ? (
            <span>
              $
              {styles[currentStyle].original_price}
            </span>
          )
          : (
            <div>
              <span className="sale-price">
                $
                {styles[currentStyle].sale_price}
                {' '}
                <span className="original-price">
                  $
                  {styles[currentStyle].original_price}
                </span>
              </span>
            </div>
          )}
      </h4>
      <h2 className="style">
        STYLE
        {'>'}
        {' '}
        {styles[currentStyle].name}
      </h2>
      <ul className="style-list">
        {
          styles.map((style, index) => (
            <div key={style.style_id}>
              <img
                alt="style-thumbnail"
                key={style.style_id}
                id={index}
                onClick={handleClick}
                className={`style-thumbnail ${style === styles[currentStyle] ? 'style-active' : ''}`}
                src={style.photos[0].thumbnail_url}
              />
            </div>
          ))
        }
      </ul>
    </div>
  );
}
