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
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
  }];

  const [imageIndex, setIndex] = useState(0);
  const [isExpanded, setExpand] = useState(false);
  const [mousePos, setPos] = useState({});

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isExpanded) {
      const mouseMove = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const X = window.innerWidth;
        const Y = window.innerHeight;

        const ratio = event.target.naturalHeight / event.target.naturalWidth;

        const height = event.target.offsetHeight;
        const width = height / ratio;
        const marginX = Math.max((X - width) / 2, 0);
        const margin = event.target.offsetParent.parentNode.offsetParent.offsetTop;

        let xScale = (x - marginX) / width * 100;
        if (xScale > 100) {
          xScale = 100;
        }
        if (xScale < 0) {
          xScale = 0;
        }

        const pos = {
          x: xScale,//(x - marginX) / width * 100,
          y: (y - margin) / height * 100,
        };
        setPos(pos);
        console.log(pos.x, width, x);
      };

      window.addEventListener('mousemove', mouseMove);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
      };
    }
  });

  const N = images.length;

  const getIndex = (index) => {
    if (index < 0) {
      return N - 1;
    } if (index > N - 1) {
      return 0;
    }
    return index;
  };

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
            <Thumbnails />
            <button type="button" key="leftNav" className="o-carousel-button carousel-left" onClick={handleNav}>{'<'}</button>
            <button type="button" key="rightNav" className="o-carousel-button carousel-right" onClick={handleNav}>{'>'}</button>
            <button type="button" key="expand" className="o-image-expand" onClick={handleExpand}>Expand</button>
            <ul>
              {
                images.map((image) => (
                  // eslint-disable-next-line max-len
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
                  <li key={image.id} className="o-slide" onClick={handleExpand}>
                    <img
                      style={{ transformOrigin: `${mousePos.x}% ${mousePos.y}%` }}
                      className={
                      `image
                        ${isExpanded ? 'zoom' : ''}
                        ${image === images[imageIndex] ? 'active' : 'hidden'}`
                      }
                      src={image.url}
                      alt="Carousel Slide"
                    />
                  </li>
                ))
              }
            </ul>
            {/* <Thumbnails /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

ImageCarousel.propTypes = {

};
