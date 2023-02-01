/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

export default function Thumbnails({
  imageIndex, setIndex, setStyle, imgToStyle, styles,
}) {
  const [displayStart, setStart] = useState(0);
  const [showDown, setDown] = useState(true);
  const [showUp, setUp] = useState(false);
  const [height, setHeight] = useState(0);
  const [mouseOut, setMouse] = useState(true);
  const [scroll, setScroll] = useState(0);

  const photos = styles.map((style) => style.photos).flat();
  const N = photos.length;
  const containerRef = useRef();

  useEffect(() => {
    const element = document.querySelector('ul#scroll-container');
    const scroller = (event) => {
      const scrollTo = Math.floor((event.srcElement.scrollTop / event.srcElement.scrollHeight) * N);
      // setScroll(scrollTo);
      // setScroll(scrollTo);
      setTimeout(() => setScroll(scrollTo), 50);
    };

    const mouseLeave = (event) => {
      const scrollTo = Math.floor((event.srcElement.scrollTop / event.srcElement.scrollHeight) * N);
      setStart(scrollTo);
    };

    element.addEventListener('mouseenter', () => { setMouse(false); });
    // element.addEventListener('mouseover', mouseLeave);
    element.addEventListener('mouseleave', mouseLeave); //console.log('LEAVING'); setMouse(true);
    element.addEventListener('scroll', scroller);

    return () => {
      element.removeEventListener('scroll', scroller);
      element.removeEventListener('mouseenter', () => setMouse(false));
      // element.removeEventListener('mouseover', mouseLeave);
      element.removeEventListener('mouseleave', mouseLeave);
    };
  });

  function handleClick(event) {
    setIndex(event.target.id);
    setStyle(imgToStyle[event.target.id]);
  }

  useEffect(() => {
    containerRef.current.children[displayStart].scrollIntoView({
      top: 0, behavior: 'smooth', inline: 'center', block: 'start', alignToTop: 'true',
    });
  }, [displayStart]);

  useEffect(() => {
    containerRef.current.children[imageIndex].scrollIntoView({
      top: 0, behavior: 'smooth', inline: 'center', block: 'start', alignToTop: 'true',
    });
    // eslint-disable-next-line no-unused-vars
    setStart((state) => (imageIndex));
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
        (displayStart > 0 && scroll > 0) ? (
          <button
            type="button"
            key="upNav"
            className="down-nav"
            onClick={scrollUp}
          >
            <MdOutlineArrowDropUp />
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
        (displayStart < (N - 7) || scroll < (N - 7)) ? (
          <button
            type="button"
            key="downNav"
            className="down-nav"
            onClick={scrollDown}
          >
            <MdOutlineArrowDropDown />
          </button>
        ) : null
      }
    </div>

  );
}
