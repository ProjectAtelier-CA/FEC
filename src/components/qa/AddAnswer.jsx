import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const answersStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'beige',
    width: 1000,
    height: 500,
  },
};
export default function App() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [newAnswer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [photos, setPhotos] = useState('');
  const [photoURLs, setPhotoURL] = useState([]);

  const emailInformation = (e) => {
    setEmail(e.target.value);
  };
  const answerInformation = (e) => {
    setAnswer(e.target.value);
  };
  const nicknameInformation = (e) => {
    setNickname(e.target.value);
  };
  const photoInformation = (e) => {
    setPhotos(e.target.files[0]);
  };

  // useEffect(() => {
  //   const quack = URL.createObjectURL(photos);
  //   setPhotoURL(quack);
  //   console.log("THIS IS URLS", photoURLs);
  // });
  // useEffect(() => {
  //   const tempPhotoStorage = [];
  //   photos.forEach((photo) => { tempPhotoStorage.push(URL.createObjectURL(photo)); });
  //   setPhotoURL(tempPhotoStorage);
  // }, [photos]);

  return (
    <span>
      <button type="button" onClick={setOpen} className="add-answer-button">Add Answer</button>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={answersStyles}
      >
        <div>Complete Information Below </div>
        <form>
          <label> Your Answer </label>
          <label className="label-answer-modal">*</label>
          <label>:</label>
          <br />
          <input className="add-answer-input" value={newAnswer} placeholder="max:1000chars" onChange={answerInformation} required />
          {' '}
          <br />
          <label> Enter Nickname</label>
          <label className="label-answer-modal">(mandatory)</label>
          <label>:</label>
          <br />
          <input
            className="add-answer-modal"
            value={nickname}
            placeholder="Example: jack1234"
            onChange={nicknameInformation}
            required
          />
          {' '}
          <br />
          <label className="label-answer-modal">For privacy reasons, do not use your full name or email address</label>
          {' '}
          <br />
          <label>Enter Email</label>
          <label className="label-answer-modal">(mandatory)</label>
          <label>:</label>
          <br />
          <input className="add-answer-modal" value={email} placeholder="jack@email.com" required />
          <br />
          <label className="label-answer-modal"> For authentication reasons, you will not be emailed</label>
          <br />
          <input type="file" value={photos} multiple accept="image/*" onClick={photoInformation} />
          {photoURLs.map((source) => <img alt="img" src={source} /> )}
        </form>
        <button type="button" onClick={() => setOpen(false)}>Submit</button>
      </Modal>
    </span>
  );
}
