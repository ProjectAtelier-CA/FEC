/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ModalImage from 'react-modal-image';

export default function PhotoList({ photo }) {
  const [open, setOpen] = useState(false);

  //   return (
  //     <span>
  // <Modal
  //   <img className="image-answer" alt="img-answer" onClick={setOpen} src={photo.url} />
  //   isOpen={open}
  //   onRequestClose={() => setOpen(false)}
  //   style={customStyles}
  // >

  // </Modal>
  //     </span>
  //   )
  return (
    <ModalImage
      className="image-answer"
      small={photo.url}
      medium={photo.url}
      large={photo.url}
    />
  );
}
