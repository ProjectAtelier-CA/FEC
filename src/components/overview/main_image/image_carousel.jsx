// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Thumbnails from './thumbnails';

export default function ImageCarousel() {
  const images = [{
    id: 1,
    url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  }];

  return (

    <div className="o-carousel-div">
      <section>
        <div className="o-carousel">
          <button type="button" key="leftNav" className="o-carousel-button carousel-left">{'<'}</button>
          <button type="button" key="rightNav" className="o-carousel-button carousel-right">{'>'}</button>
          <button type="button" key="expand" className="image_expand">Expand</button>
          <ul>
            {
              images.map((image) => (
                <li key={image.id} className="o-slide">
                  <img src={image.url} alt="Carousel Slide" />
                </li>
              ))
            }
          </ul>
          <Thumbnails />
        </div>
      </section>
    </div>
  );
}

ImageCarousel.propTypes = {

};
