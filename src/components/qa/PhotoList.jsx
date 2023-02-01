import ModalImage from 'react-modal-image';
import React from 'react';

export default function PhotoList({ photo }) {
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
