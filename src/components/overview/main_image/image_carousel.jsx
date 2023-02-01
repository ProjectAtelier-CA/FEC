// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Thumbnails from './thumbnails';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineFullscreen } from 'react-icons/md';

export default function ImageCarousel({
  imageIndex, setIndex, setStyle, imgToStyle, styles,
}) {
  const images = styles.map((style) => style.photos).flat();

  // const [imageIndex, setIndex] = useState(0);
  const [isExpanded, setExpand] = useState(false);
  const [mousePos, setPos] = useState({});
  const [isClicked, setClick] = useState(false);
  // const [thumbnailIndex, setThumbnail] = useState(imageIndex);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isExpanded && isClicked && mousePos !== null) {
      const mouseMove = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const X = window.innerWidth;
        // const Y = window.innerHeight;
        // const ratio = event.target.naturalHeight / event.target.naturalWidth;

        const height = event.target.offsetHeight;
        // const width = height / ratio;
        // const marginX = Math.max((X - width) / 2, 0);
        // eslint-disable-next-line max-len
        let margin = 0;
        try {
          margin = event.target.offsetParent.parentNode.offsetParent.offsetTop;
        } catch (error) {
          margin = null;
        }
        let pos;
        if (margin === null) {
          pos = mousePos;
        } else {
          pos = {
            x: (x / X) * 100,
            y: ((y - margin) / height) * 100,
          };
        }

        setPos(pos);
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

  function handleLeft(event) {
    const newIndex = getIndex(imageIndex - 1);
    setIndex(newIndex);
    setStyle(imgToStyle[newIndex]);
  }

  function handleNav(event) {
    let newIndex;
    // eslint-disable-next-line no-restricted-globals
    if (event.target.data === 'left') {
      newIndex = getIndex(imageIndex - 1);
    } else {
      newIndex = getIndex(imageIndex + 1);
    }

    setIndex(newIndex);
    setStyle(imgToStyle[newIndex]);
  }

  function handleImageClick() {
    if (isExpanded) {
      setClick(!isClicked);
    }
    if (!isExpanded) {
      setExpand(!isExpanded);
    }
  }

  function handleExpand() {
    setExpand(!isExpanded);
  }

  return (

    <div className="o-carousel-div">
      <section>
        <div className={isExpanded ? 'expanded' : 'normal'}>
          <div className="o-carousel">
            <Thumbnails
              imageIndex={imageIndex}
              setIndex={setIndex}
              imgToStyle={imgToStyle}
              setStyle={setStyle}
              styles={styles}
            />
            <button type="button" key="leftNav" className="o-carousel-button carousel-left" onClick={handleLeft}><MdKeyboardArrowLeft /></button>
            <button type="button" key="rightNav" className="o-carousel-button carousel-right" onClick={handleNav}><MdKeyboardArrowRight /></button>
            <button type="button" key="expand" className="o-image-expand" onClick={handleExpand}><MdOutlineFullscreen /></button>
            <ul>
              {
                images.map((image) => (
                  // eslint-disable-next-line max-len
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
                  <li key={image.url} className="o-slide" onClick={handleImageClick}>
                    <img
                      style={{ transformOrigin: `${mousePos.x}% ${mousePos.y}%` }}
                      className={
                      `image
                        ${isExpanded || (mousePos === null) ? 'zoom' : ''}
                        ${isClicked && isExpanded ? 'zoom_clicked' : ''}
                        ${image === images[imageIndex] ? 'active' : 'hidden'}`
                      }
                      src={image.url}
                      alt="Carousel Slide"
                    />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
