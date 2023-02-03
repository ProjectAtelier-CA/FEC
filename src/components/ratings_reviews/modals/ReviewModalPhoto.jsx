import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default function ReviewModalPhoto({
  photoUrl, photoIndex, handleImageClick, setShowPhotoError,
}) {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      className="individual-photo"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      onClick={() => handleImageClick(photoIndex)}
    >
      <img
        src={photoUrl}
        alt="Review Image"
        onError={() => setShowPhotoError(true)}
      />
      {showDelete ? <div className="photo-trashcan">{MdDeleteForever()}</div> : null}
    </div>
  );
}