import React, {useState, useEffect} from 'react';

const ImageCarousel = ({images}) => {

  images = images || [{
    id: 1,
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png'
  },
  {
    id: 2,
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png'
  }]


  return (

    <div>
      <div>
        <img key={images[0].id} className='carousel_image' src={images[0].url} width='200px' height='100px'></img>
      </div>
      <button key='rightNav' className = 'carousel_nav' >Right</button>
      <button key='leftNav' className = 'carousel_nav' >Left</button>
      <button key='expand' className = 'image_expand' >Expand</button>
    </div>

  )

};

export default ImageCarousel;