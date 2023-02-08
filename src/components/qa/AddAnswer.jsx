/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const answersStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#bb9f8c',
    width: 1000,
    height: 600,
  },
};
export default function App({ question_id, productName, questionBody }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [newAnswer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [photos, setPhotos] = useState([]);
  const [photoURLs, setPhotoURL] = useState([]);
  const [maxLength, setMax] = useState(1000);

  const emailInformation = (e) => {
    setEmail(e.target.value);
  };
  const answerInformation = (e) => {
    setAnswer(e.target.value);
    setMax(maxLength - e.target.value.length);
  };
  const nicknameInformation = (e) => {
    setNickname(e.target.value);
  };
  const photoInformation = (e) => {
    setPhotos([e.target.files[0]]);
  };
  const validateEmail = function (internetMail) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(internetMail);
  };

  const submitQuestion = () => {
    if (validateEmail(email) && newAnswer.length !== 0 && nickname.length !== 0) {
      axios.post('http://localhost:8081/answers', {
        question_id,
        body: newAnswer,
        name: nickname,
        email,
        photo: photoURLs,
      });
      setOpen(false);
    } else if (!validateEmail(email)) {
      alert('Not valid email');
    } else {
      alert("You must enter the following : Answer, Nickname");
    }
  };

  return (
    <span className="add-answer-span">
      <button type="button" onClick={setOpen} className="add-answer-button">Add Answer</button>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={answersStyles}
      >
        <h2 className="answer-header-qa">Submit Your Answer </h2>
        <h6> {productName}: {questionBody}</h6>
        <form>
          <label> Your Answer: * </label>
          <br />
          <textarea rows="5" maxLength="1000" value={newAnswer} onChange={answerInformation} className="add-answer-input">.</textarea>
          <label className="word-limit">
            Limit: {maxLength}
          </label>
          {' '}
          <br />
          <label> Enter Nickname: *</label>
          <br />
          <input
            className="add-answer-modal"
            value={nickname}
            maxLength="60"
            placeholder="Example: jack1234"
            onChange={nicknameInformation}
            required
          />

          <br />
          <label className="label-answer-modal-warning">For privacy reasons, do not use your full name or email address</label>
          <br />
          {' '}
          <br />
          <label>Enter Email: *</label>
          <br />
          <input className="add-answer-modal" type="email" value={email} placeholder="jack@email.com" onChange={emailInformation} required />
          <br />
          <label className="label-answer-modal-warning"> For authentication reasons, you will not be emailed</label>
          <br />
          <br />
          <input type="file" value={photos} multiple accept="image/*" onClick={photoInformation} />
        </form>
        <br />
        <button type="button" className="answer-submit-button" onClick={submitQuestion}>Submit</button>
        <br />
        <label className="mandatory-warning">Required Fields * </label>
      </Modal>
    </span>
  );
}
