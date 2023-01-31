import React, { useState } from 'react';

export default function ReviewCardPhotos({ photos, handleImageClick }) {
  const photoElements = photos.map((photo) => (
    <img key={photo.id} alt="review" src={photo.url} className="review-photo" />
  ));

  return (
    <div>
      (Optional) ReviewCardPhotos -If they attach pictures- (conditional render)
      <div onClick={(e) => handleImageClick(e)}>
        {photoElements}
      </div>
    </div>
  );
}
