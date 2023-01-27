import React, { useState, useEffect } from 'react';

export default function ImageCarousel() {
  const images = [{
    id: 1,
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png',
  },
  {
    id: 2,
    // eslint-disable-next-line comma-dangle
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png'
  }];

  return (

    <div>
      <div>
        <img alt="carousel_image" key={images[0].id} className="carousel_image" src={images[0].url} width="200px" height="100px" />
      </div>
      <button type="button" key="rightNav" className="carousel_nav">Right</button>
      <button type="button" key="leftNav" className="carousel_nav">Left</button>
      <button type="button" key="expand" className="image_expand">Expand</button>
    </div>
  );
}

ImageCarousel.propTypes = {

};
