import React, { useState } from 'react';

export default function ReviewCardPhotos({ photos, handleImageClick }) {
  const photoElements = photos.map((photo) => (
    <img key={photo.id} alt="review" src={photo.url} className="review-photo" />
  ));

  return (
    <div>
      <div>Review photos:</div>
      <div onClick={(e) => handleImageClick(e)}>
        {photoElements}
      </div>
    </div>
  );
}
