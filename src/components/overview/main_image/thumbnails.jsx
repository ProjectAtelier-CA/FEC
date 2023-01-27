// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Thumbnails() {
  const images = [{
    id: 1,
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png',
  }];

  return (

    <div className="thumbnails">
      <ul className="thumbnail-images">
        {
        images.map((image) => (
          <li key={image.id} className="thumbnail-div">
            <img alt="thumbnail" className="thumbnail-image" src={image.url} width="40px" height="40px" />
          </li>
        ))
      }
      </ul>
      <button type="button" key="downNav" className="down-nav">&#8615;</button>
    </div>

  );
}

Thumbnails.propTypes = {
  // images: PropTypes.array.isRequired,
};
