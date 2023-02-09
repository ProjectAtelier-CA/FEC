/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const questionStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 100,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    position: 'absolute',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#bb9f8c',
    width: 1000,
    height: 600,
  },
};

export default function App({ product_id, productName }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [newQuestion, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [maxLength, setMax] = useState(1000);

  const emailInformation = (e) => {
    setEmail(e.target.value);
  };
  const questionInformation = (e) => {
    setQuestion(e.target.value);
    setMax(maxLength - e.target.value.length);
  };
  const nicknameInformation = (e) => {
    setNickname(e.target.value);
  };
  const validateEmail = function (internetMail) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(internetMail);
  };

  const submitQuestion = () => {
    if (validateEmail(email) && newQuestion.length !== 0 && nickname.length !== 0) {
      axios.post('/questions', {
        body: newQuestion,
        name: nickname,
        email,
        product_id,
      });
      setOpen(false);
    } else if (!validateEmail(email)) {
      alert('Not valid email try again');
    } else {
      alert('You must enter the following : Question, Nickname');
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [open]);
  return (
    <span>
      <button className="add-question-button" type="button" onClick={setOpen}> Add Question +</button>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        // className="question-modal"
        style={questionStyles}
      >
        <h2 className="question-modal-title">Ask Your Question </h2>
        <h5 className="question-modal-title-subtitle">
          {' '}
          About the
          {' '}
          {productName}
          {' '}
          Here
        </h5>
        <div> Complete Information Below </div>
        <form>
          <label> Your Question </label>
          <label className="label-answer-modal">*</label>
          <label>:</label>
          <br />
          <textarea rows="5" maxLength="1000" value={newQuestion} onChange={questionInformation} className="add-answer-input">.</textarea>
          {/* <input className="add-answer-input" value={newQuestion} onChange={questionInformation} required /> */}
          <label className="word-limit">
            Limit:
            {' '}
            {maxLength}
          </label>
          {' '}
          <br />
          <label> Enter Nickname</label>
          <label className="label-answer-modal">*</label>
          <label>:</label>
          <br />
          <input
            className="add-answer-modal"
            value={nickname}
            placeholder="Example: jack1234"
            onChange={nicknameInformation}
            maxLength="60"
            required
          />
          {' '}
          <br />
          <label className="label-answer-modal-warning">For privacy reasons, do not use your full name or email address</label>
          {' '}
          <br />
          <br />
          <label type="email">Enter Email</label>
          <label className="label-answer-modal">*</label>
          <label>:</label>
          <br />
          <input className="add-answer-modal" value={email} placeholder="jack@email.com" onChange={emailInformation} required />
          <br />
          <label className="label-answer-modal-warning"> For authentication reasons, you will not be emailed</label>
          <br />
          <br />
          <input type="submit" className="answer-submit-button" onClick={submitQuestion} />
          <br />
          <label className="mandatory-warning">Required Fields * </label>
        </form>
      </Modal>
    </span>
  );
}
