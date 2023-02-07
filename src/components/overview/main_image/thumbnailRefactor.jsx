/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function Thumbnails2({
  imageIndex, setIndex, setStyle, imgToStyle, styles, currentStyle, setSku, setSkus, product_id, photos, N, styleClick, clickStyle,
}) {
  // const [displayStart, setStart] = useState(0);
  const [height, setHeight] = useState(0);
  const [maxHeight, setMax] = useState(100000);
  const [mouseOut, setMouse] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [scrollUp, setScrollUp] = useState(0);
  const [scrollDown, setScrollDown] = useState(6);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef();
  const isDark = useDarkMode();

  // ----- Use Effects -------//
  useEffect(() => {
    setScrolled(false);
  }, [scroll]);

  useEffect(() => {
    setScrollUp(0);
    setScrollDown(6);
  }, [product_id, scrollRef]);

  useEffect(() => {
    if (styles[currentStyle] !== undefined) {
      setSkus(styles[currentStyle].skus);
      setSku(Object.keys(styles[currentStyle].skus)[0]);
    }
  }, [currentStyle]);

  useEffect(() => {
    setScrollUp(imageIndex);
    setScrollDown(imageIndex + 6);
    if (mouseOut && styleClick) {
      scrollRef.current.children[imageIndex].scrollIntoView({
        top: 0, behavior: 'smooth', inline: 'center', block: 'nearest', alignToTop: 'true',
      });
      clickStyle(false);
    }
  }, [currentStyle, imageIndex, styleClick]);

  // ----- Local functions -------//
  function handleScroll() {
    const { scrollTop, scrollHeight } = scrollRef.current;
    setScrolled(true);
    setHeight(scrollTop);
    setMax((scrollHeight / N) * (N - 7));
  }

  function handleMouseEnter() {
    setMouse(false);
    setScrolled(false);
  }

  function handleMouseLeave() {
    const { scrollTop, scrollHeight } = scrollRef.current;
    const scrollTo = Math.floor((scrollTop / scrollHeight) * N);
    if (scrolled) {
      setScrollUp(scrollTo);
      setScrollDown(scrollTo + 6);
    }
    setMouse(true);
  }

  function handleClick(event) {
    const y = parseInt(event.target.id, 10);
    setScrollUp(y);
    setScrollDown(y + 6);
    setStyle(imgToStyle[y]);
    setIndex(y);
  }

  const handleScrollDown = () => {
    let scrollTo;
    if (photos[scrollDown + 7]) {
      scrollTo = scrollDown + 7;
    } else {
      scrollTo = N - 1;
    }
    setScrollDown(scrollTo + 6);
    setScrollUp(scrollTo);
    scrollRef.current.children[scrollTo].scrollIntoView({
      top: 0, behavior: 'smooth', inline: 'center', block: 'nearest', alignToTop: 'true',
    });
  };

  const handleScrollUp = () => {
    let scrollTo;
    if (scrollUp - 7 < 0) {
      scrollTo = 0;
    } else {
      scrollTo = scrollUp - 7;
    }
    setScrollUp(scrollTo);
    setScrollDown(scrollTo + 6);
    scrollRef.current.children[scrollTo].scrollIntoView({
      top: 0, behavior: 'smooth', inline: 'center', block: 'nearest', alignToTop: 'true',
    });
  };

  return (

    <div className="thumbnails">
      {
        (height > 0) ? (
          <button
            type="button"
            id="upNav"
            key="upNav"
            className={`up-nav ${isDark ? 'thumbnail-nav-dark' : 'thumbnail-nav-light'}`}
            onClick={handleScrollUp}
          >
            <MdOutlineArrowDropUp className={`nav-arrow ${isDark ? 'arrow-dark' : 'arrow-light'}`} />
          </button>
        ) : null
      }
      <ul
        className="thumbnail-images"
        id="scroll-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        ref={scrollRef}
      >
        {
        photos.map((image, index) => (
          <li key={index} className="thumbnail-div">
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
            id="downNav"
            key="downNav"
            className={`down-nav ${isDark ? 'thumbnail-nav-dark' : 'thumbnail-nav-light'}`}
            onClick={handleScrollDown}
          >
            <MdOutlineArrowDropDown className={`nav-arrow ${isDark ? 'arrow-dark' : 'arrow-light'}`} />
          </button>
        ) : null
      }
    </div>

  );
}
