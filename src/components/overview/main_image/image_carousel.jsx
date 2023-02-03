// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {
  MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineFullscreen, MdOutlineFullscreenExit,
} from 'react-icons/md';
import Thumbnails from './thumbnails';

export default function ImageCarousel({
  imageIndex, setIndex, setStyle, imgToStyle, styles, setSku, setSkus, currentStyle,
}) {
  const images = styles.map((style) => style.photos).flat();
  const N = images.length;

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
        const ratio = event.target.naturalHeight / event.target.naturalWidth;

        const height = event.target.offsetHeight;
        const width = height / ratio;
        const startX = Math.max((X - width) / 2, 0);
        const endX = X - startX;
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
          let newX = x;
          if (newX < startX || newX > endX) {
            newX = mousePos.x;
          }
          pos = {
            x: newX,
            y: y - margin,
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

  useEffect(() => {
    if (styles[currentStyle] !== undefined) {
      setSkus(styles[currentStyle].skus);
      setSku(Object.keys(styles[currentStyle].skus)[0]);
    }
  }, [currentStyle]);

  const getIndex = (index) => {
    if (index < 0) {
      return N - 1;
    } if (index > N - 1) {
      return 0;
    }
    return index;
  };

  function handleLeft() {
    const newIndex = getIndex(imageIndex - 1);
    setIndex(newIndex);
    setStyle(imgToStyle[newIndex]);
  }

  function handleRight() {
    const newIndex = getIndex(parseInt(imageIndex, 10) + 1);
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
              setSku={setSku}
              setSkus={setSkus}
              currentStyle={currentStyle}
            />
            {
              imageIndex > 0
                ? (
                  <button
                    type="button"
                    key="leftNav"
                    className="o-carousel-button carousel-left"
                    onClick={handleLeft}
                  >
                    <MdKeyboardArrowLeft className="carousel-nav" />
                  </button>
                )
                : null
            }
            {
              imageIndex < (N - 1)
                ? (
                  <button
                    type="button"
                    key="rightNav"
                    className="o-carousel-button carousel-right"
                    onClick={handleRight}
                  >
                    <MdKeyboardArrowRight className="carousel-nav" />

                  </button>
                )
                : null
            }
            <button
              type="button"
              key="expand"
              className="o-image-expand"
              onClick={handleExpand}
            >
              {
                isExpanded ? (<MdOutlineFullscreenExit />) : (<MdOutlineFullscreen />)
              }
            </button>
            <ul>
              {
                images.map((image) => (
                  // eslint-disable-next-line max-len
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
                  <li key={image.url} className="o-slide" onClick={handleImageClick}>
                    <img
                      style={{ transformOrigin: `${mousePos.x}px ${mousePos.y}px` }}
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
