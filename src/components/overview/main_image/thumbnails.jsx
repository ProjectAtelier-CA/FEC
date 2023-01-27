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

    <>
      <ul>
        {
        images.map((image) => (
          <div>
            <img alt="thumbnail" key={image.id} className="thumbnail_image" src={image.url} width="40px" height="40px" />
          </div>
        ))
      }
      </ul>
      <button type="button" key="downNav" className="down_nav">Down</button>
    </>

  );
}

Thumbnails.propTypes = {
  // images: PropTypes.array.isRequired,
};
