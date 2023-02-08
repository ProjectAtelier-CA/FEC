import React, { useState } from 'react';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function ReviewCardPhotos({ photos, handleImageClick }) {
  const photoUrls = [];
  const isDarkMode = useDarkMode();

  const photoElements = photos.map((photo, index) => {
    photoUrls.push(photo.url);
    return <img key={photo.id} alt={`${index} review`} src={photo.url} className="review-photo" />
  });

  return (
    <div className={`review-photo-container ${isDarkMode ? 'active-dark' : ''}`}>
      {/* <div>Review Photos:</div> */}
      <div onClick={(e) => handleImageClick(e, photoUrls)}>
        {photoElements}
      </div>
    </div>
  );
}
