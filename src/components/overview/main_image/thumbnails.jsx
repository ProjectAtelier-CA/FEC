/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

export default function Thumbnails({
  imageIndex, setIndex, setStyle, imgToStyle, styles, currentStyle, setSku, setSkus,
}) {
  const [displayStart, setStart] = useState(0);
  const [height, setHeight] = useState(0);
  const [maxHeight, setMax] = useState(100);
  const [mouseOut, setMouse] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const photos = styles.map((style) => style.photos).flat();
  const N = photos.length;
  const containerRef = useRef();

  useEffect(() => {
    const element = document.querySelector('ul#scroll-container');
    const scroller = (event) => {
      const scrollTo = Math.floor((event.srcElement.scrollTop / event.srcElement.scrollHeight) * N);
      setScrolled(true);
      setScroll(scrollTo);
      setHeight(event.srcElement.scrollTop);
      // eslint-disable-next-line max-len
      setMax((event.srcElement.scrollHeight / N) * (N - 7));
      // eslint-disable-next-line no-mixed-operators
    };

    const mouseLeave = (event) => {
      const scrollTo = Math.floor((event.srcElement.scrollTop / event.srcElement.scrollHeight) * N);
      if (scrolled) {
        setStart(scrollTo);
      }
      setMouse(true);
    };

    const mouseEnter = () => {
      setMouse(false);
      setScrolled(false);
    };

    element.addEventListener('mouseenter', mouseEnter);
    element.addEventListener('mouseleave', mouseLeave);
    element.addEventListener('scroll', scroller);

    return () => {
      element.removeEventListener('scroll', scroller);
      element.removeEventListener('mouseenter', mouseEnter);
      element.removeEventListener('mouseleave', mouseLeave);
    };
  });

  function handleClick(event) {
    setStyle(imgToStyle[event.target.id]);
    setIndex(event.target.id);
  }

  useEffect(() => {
    if (styles[currentStyle] !== undefined) {
      setSkus(styles[currentStyle].skus);
      setSku(Object.keys(styles[currentStyle].skus)[0]);
    }
  }, [currentStyle]);

  useEffect(() => {
    setScrolled(false);
  }, [scroll]);

  useEffect(() => {
    const params = {
      top: 0, behavior: 'smooth', inline: 'center', block: 'nearest', alignToTop: 'false',
    };
    if (displayStart > 0) {
      containerRef.current.children[displayStart].scrollIntoView(params);
    }
  }, [displayStart]);

  useEffect(() => {
    if (mouseOut) {
      setStart(imageIndex);
      setScroll(imageIndex);
      if (imageIndex === 0) {
        containerRef.current.children[0].scrollIntoView({
          top: 0, behavior: 'smooth', inline: 'center', block: 'nearest', alignToTop: 'true',
        });
      }
    } else {
      setScroll(imageIndex);
    }
  }, [imageIndex]);

  const scrollDown = () => {
    let scrollTo;
    if (photos[displayStart + 7]) {
      scrollTo = displayStart + 7;
    } else {
      scrollTo = N - 1;
    }
    setStart(scrollTo);
  };

  const scrollUp = () => {
    let scrollTo;
    if (scroll - 7 < 0) {
      scrollTo = 0;
      const scrollPos = 0;
      setStart(scrollTo);
      containerRef.current.children[scrollPos].scrollIntoView({
        top: 0, behavior: 'smooth', inline: 'center', block: 'nearest', alignToTop: 'true',
      });
    } else {
      scrollTo = scroll - 7;
      setStart(scrollTo);
    }
  };

  return (

    <div className="thumbnails">
      {
        (height > 0) ? (
          <button
            type="button"
            key="upNav"
            className="up-nav"
            onClick={scrollUp}
          >
            <MdOutlineArrowDropUp className="nav-arrow" />
          </button>
        ) : null
      }
      <ul className="thumbnail-images" id="scroll-container" ref={containerRef}>
        {
        photos.map((image, index) => (
          <li key={image.url} className="thumbnail-div">
            <img
              id={index}
              alt="thumbnail"
              className={
                `thumbnail-image
                 ${image === photos[imageIndex] ? 'thumbnail-active' : ''}`
              }
              src={image.thumbnail_url}
              onClick={handleClick}
              width="40px"
              height="40px"
            />
          </li>
        ))
      }
      </ul>
      {
        (height < maxHeight && N >= 7) ? (
          <button
            type="button"
            key="downNav"
            className="down-nav"
            onClick={scrollDown}
          >
            <MdOutlineArrowDropDown className="nav-arrow" />
          </button>
        ) : null
      }
    </div>

  );
}
