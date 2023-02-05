import React, { useRef } from 'react';

export default function ImageCarousel({
  onClick, currImageIndex, modalImagePhotos, setCurrImageIndex, outsideModalRef,
}) {
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    // e.preventDefault();
    // console.log(e.deltaY);
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + e.deltaY,
      behavior: 'smooth',
    });
    // console.log(scrollRef.current);
  }

  const handlePrevClick = (e) => {
    e.stopPropagation();
    setCurrImageIndex(prevIndex);
  }

  const handleNextClick = (e) => {
    e.stopPropagation();
    setCurrImageIndex(nextIndex);
  }

  let prevIndex = currImageIndex - 1 < 0 ? modalImagePhotos.length - 1 : currImageIndex - 1;
  let nextIndex = currImageIndex + 1 === modalImagePhotos.length ? 0 : currImageIndex + 1;

  return (
    <div className="image-carousel-modal-container" onClick={onClick}>
      <div className="image-modal-carousel">
        {modalImagePhotos.length > 1 ? (
          <div className="image-carousel-modal-next" onClick={(e) => handlePrevClick(e)}>
            <img src={modalImagePhotos[prevIndex]} />
          </div>
        ) : null }
        <div className="image-carousel-modal-content">
          <img src={modalImagePhotos[currImageIndex]} alt="clothing-review" />
        </div>
        {modalImagePhotos.length > 1 ? (
          <div className="image-carousel-modal-next" onClick={(e) => handleNextClick(e)}>
          <img src={modalImagePhotos[nextIndex]} />
          </div>
        ) : null }
      </div>
    </div>
  );
}