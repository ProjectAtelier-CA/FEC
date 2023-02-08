import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function ReviewModalPhoto({
  photoUrl, photoIndex, handleImageClick, setShowPhotoError,
}) {
  const [showDelete, setShowDelete] = useState(false);
  const isDarkMode = useDarkMode();

  return (
    <div
      className={`individual-photo ${isDarkMode ? 'active-dark' : ''}`}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      onClick={() => handleImageClick(photoIndex)}
      data-testid="review-modal-photo-test"
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