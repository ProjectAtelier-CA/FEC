/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Banner({
  styles, setStyle, setIndex, setStyleObject, clickStyle,
}) {
  const [sales, setSales] = useState({});

  useEffect(() => {
    const indecesArray = [0];
    styles.forEach((style) => {
      const N = indecesArray.length;
      indecesArray.push(indecesArray[N - 1] + style.photos.length);
    });

    const indexStyles = styles.map((style, index) => ({ style, index, imageIndex: indecesArray[index] }));
    const saleStyles = indexStyles.filter((item) => (item.style.sale_price !== null));
    setSales(saleStyles);
  }, [styles]);

  function handleClick(event) {
    const id = parseInt(event.target.id, 10);
    setStyle(id);
    setIndex(parseInt(event.target.dataset.image, 10));
    setStyleObject(styles[id]);
    clickStyle(true);
  }

export default function Banner({
  styles, setStyle, setIndex, setStyleObject, clickStyle,
}) {
  const [sales, setSales] = useState({});

  useEffect(() => {
    const indecesArray = [0];
    styles.forEach((style) => {
      const N = indecesArray.length;
      indecesArray.push(indecesArray[N - 1] + style.photos.length);
    });

    const indexStyles = styles.map((style, index) => ({ style, index, imageIndex: indecesArray[index] }));
    const saleStyles = indexStyles.filter((item) => (item.style.sale_price !== null));
    setSales(saleStyles);
  }, [styles]);

  function handleClick(event) {
    const id = parseInt(event.target.id, 10);
    setStyle(id);
    setIndex(parseInt(event.target.dataset.image, 10));
    setStyleObject(styles[id]);
    clickStyle(true);
  }

  return (
    sales.length > 0
      ? (
        <div className="banner" data-testid="banner">
          <em>&#8212;&nbsp;DON&#39;T MISS BIG SAVINGS:&nbsp;</em>
          <div className="sales" key="sales">
            {
              sales.map((sale, index) => (
                <div key={index}>
                  <a className="sale" onClick={handleClick} id={sale.index} data-image={sale.imageIndex}>
                    $
                    {sale.style.original_price - sale.style.sale_price}
                    {' '}
                    OFF
                  </a>
                  &nbsp;
                </div>
              ))
            }
            &nbsp;&#8212;
          </div>
        </div>
      )
      : null
  );
}
