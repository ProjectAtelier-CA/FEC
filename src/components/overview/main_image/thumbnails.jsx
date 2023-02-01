/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Thumbnails({
  imageIndex, setIndex, setStyle, imgToStyle, styles,
}) {
  const photos = styles.map((style) => style.photos).flat();

  function handleClick(event) {
    setIndex(event.target.id);
    setStyle(imgToStyle[event.target.id]);
  }

  return (

    <div className="thumbnails">
      <ul className="thumbnail-images">
        {
        photos.map((image, index) => (
          <li key={image.url} className="thumbnail-div">
            <img
              id={index}
              alt="thumbnail"
              className={
                `thumbnail-image
                 ${image === photos[imageIndex] ? 'thumbnail-active' : ''}`
              }
              src={image.thumbnail_url}
              onClick={handleClick}
              width="40px"
              height="40px"
            />
          </li>
        ))
      }
      </ul>
      <button type="button" key="downNav" className="down-nav">&#8615;</button>
    </div>

  );
}
