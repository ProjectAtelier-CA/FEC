import React from 'react';

export default function ReviewCardPhotos({ photos }) {
  const photoElements = photos.map((photo) => (
    <img key={photo.id} alt="review" src={photo.url} className="review-photo" />
  ));

  return (
    <div>
      (Optional) ReviewCardPhotos -If they attach pictures- (conditional render)
      <div>
        {photoElements}
      </div>
    </div>
  );
}
