import React, { useState } from 'react';

export default function ReviewCardPhotos({ photos, handleImageClick }) {
  const photoElements = photos.map((photo) => (
    <img key={photo.id} alt="review" src={photo.url} className="review-photo" />
  ));

  return (
    <div className="review-photo-container">
      {/* <div>Review Photos:</div> */}
      <div onClick={(e) => handleImageClick(e)}>
        {photoElements}
      </div>
    </div>
  );
}
