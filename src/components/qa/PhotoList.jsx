import ModalImage from 'react-modal-image';
import React from 'react';

export default function PhotoList({ photo }) {
  return (
    <ModalImage
      className="image-answer"
      small={photo.url}
      medium={photo.url}
      large={photo.url}
    />
  );
}
