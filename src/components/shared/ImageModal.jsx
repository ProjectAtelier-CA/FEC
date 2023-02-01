import React from 'react';

// Parent component needs 2 states:
// const [showModal, setShowModal] = useState(false);
// const [modalImageURL, setModalImageURL] = useState('');

// I ended up putting the event handler on the div that holds the images.
// Then on click and if it has a .src property, set the two states.
// Image needs to have onClick handler:
// const handleImageClick = (e) => {
//   if (e.target.src) {
//     setModalImage(e.target.src);
//     setShowModal(true);
//   }
// };

// ImageModal takes two props (url and onClick)

// This onClick is passed into the ImageModal component
// const handleModalClick = () => {
//   setShowModal(false);
// };

// The url={modalImageURL}

// CSS styling is located in my rrstyles.scss under their respective classNames.

export default function ImageModal({ url, onClick }) {
  return (
    <div className="image-modal-container" onClick={onClick} >
      <div className="image-modal-content">
        <img src={url} alt="clothing-review" />
      </div>
    </div>
  );
}
