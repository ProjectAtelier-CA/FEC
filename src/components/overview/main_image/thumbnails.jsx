import React, {useState, useEffect} from 'react';



const Thumbnails = ({images}) => {

  images = images || [{
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png'
  },
  {
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png'
  }]

  return (

    <>
      <ul>
      {
        images.map((image) => {
          return (
            <div>
              <img class='thumbnail_image' src={image.url} width='40px' height='40px'></img>
            </div>
          )
        })
      }
      </ul>
      <button class='down_nav'>Down</button>
    </>

  )

}

export default Thumbnails;