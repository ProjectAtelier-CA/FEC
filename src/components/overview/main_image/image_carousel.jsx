import React, {useState, useEffect} from 'react';

const ImageCarousel = ({images}) => {

  images = images || [{
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png'
  },
  {
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png'
  }]


  return (

    <div>
      <div>
        <img class='carousel_image' src={images[0].url} width='200px' height='100px'></img>
      </div>
      <button class = 'carousel_nav' >Right</button>
      <button class = 'carousel_nav' >Left</button>
      <button class = 'image_expand' >Expand</button>
    </div>

  )

};

export default ImageCarousel;