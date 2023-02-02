/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

export default function Thumbnails({
  imageIndex, setIndex, setStyle, imgToStyle, styles,
}) {
  const [displayStart, setStart] = useState(0);
  const [height, setHeight] = useState(0);
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
    setIndex(event.target.id);
    setStyle(imgToStyle[event.target.id]);
  }

  useEffect(() => {
    setScrolled(false);
  }, [scroll]);

  useEffect(() => {
    let params = {
      top: 0, behavior: 'smooth', inline: 'center', block: 'start', alignToTop: 'true',
    };
    if (displayStart <= 1) {
      params = {
        top: 0, behavior: 'smooth', inline: 'center', block: 'end', alignToTop: 'true',
      };
    }
    containerRef.current.children[displayStart].scrollIntoView(params);
  }, [displayStart]);

  useEffect(() => {
    if (mouseOut) {
      setStart(imageIndex);
    } else {
      setScroll(imageIndex);
    }
  }, [imageIndex]);

  const scrollDown = () => {
    let scrollTo;
    if (photos[displayStart + 6]) {
      scrollTo = displayStart + 6;
    } else {
      scrollTo = N - 1;
    }
    setStart(scrollTo);
  };

  const scrollUp = () => {
    let scrollTo;
    if (displayStart - 6 <= 0) {
      scrollTo = 0;
    } else {
      scrollTo = displayStart - 6;
    }
    setStart(scrollTo);
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
        (scroll < (N - 7)) ? (
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
