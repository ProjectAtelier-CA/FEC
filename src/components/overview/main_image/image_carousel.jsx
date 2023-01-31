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

  const N = images.length;

  const getIndex = (index) => {
    if (index < 0) {
      return N - 1;
    } if (index > N - 1) {
      return 0;
    }
    return index;
  };

  const [imageIndex, setIndex] = useState(0);
  const [isExpanded, setExpand] = useState(false);

  function handleNav() {
    let newIndex;
    // eslint-disable-next-line no-restricted-globals
    if (event.target.classname === 'o-carousel-button carousel-left') {
      newIndex = getIndex(imageIndex + 1);
    } else {
      newIndex = getIndex(imageIndex - 1);
    }
    setIndex(newIndex);
  }

  function handleExpand() {
    setExpand(!isExpanded);
  }

  return (

    <div className="o-carousel-div">
      <section>
        <div className={isExpanded ? 'expanded' : 'normal'}>
          <div className="o-carousel">
            <button type="button" key="leftNav" className="o-carousel-button carousel-left" onClick={handleNav}>{'<'}</button>
            <button type="button" key="rightNav" className="o-carousel-button carousel-right" onClick={handleNav}>{'>'}</button>
            <button type="button" key="expand" className="o-image-expand" onClick={handleExpand}>Expand</button>
            <ul>
              {
                images.map((image) => (
                  <li key={image.id} className="o-slide">
                    <img
                      className={
                      image === images[imageIndex] ? 'active' : 'hidden'
                    }
                      src={image.url}
                      alt="Carousel Slide"
                    />
                  </li>
                ))
              }
            </ul>
            <Thumbnails />
          </div>
        </div>
      </section>
    </div>
  );
}

ImageCarousel.propTypes = {

};
