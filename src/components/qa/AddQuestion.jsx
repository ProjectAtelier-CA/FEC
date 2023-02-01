/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const questionStyles = {
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

export default function App({ product_id }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [newQuestion, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');

  const emailInformation = (e) => {
    setEmail(e.target.value);
  };
  const questionInformation = (e) => {
    setQuestion(e.target.value);
  };
  const nicknameInformation = (e) => {
    setNickname(e.target.value);
  };

  const submitQuestion = () => {
    axios.post('http://localhost:8081/questions', {
      body: newQuestion,
      name: nickname,
      email,
      product_id,
    });
  };

  return (
    <span>
      <button className="add-question-button" type="button" onClick={setOpen}> Add Question +</button>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={questionStyles}
      >
        <div> Complete Information Below </div>
        <form>
          <label> Your Question </label>
          <label className="label-answer-modal">*</label>
          <label>:</label>
          <br />
          <input className="add-answer-input" value={newQuestion} placeholder="max:1000chars" onChange={questionInformation} required />
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
            required
          />
          {' '}
          <br />
          <label className="label-answer-modal">For privacy reasons, do not use your full name or email address</label>
          {' '}
          <br />
          <label htmlFor="email">Enter Email</label>
          <label className="label-answer-modal">*</label>
          <label>:</label>
          <br />
          <input className="add-answer-modal" value={email} placeholder="jack@email.com" onChange={emailInformation} required />
          <br />
          <label className="label-answer-modal"> For authentication reasons, you will not be emailed</label>
          <br />
          <input type="submit" onClick={submitQuestion} />
        </form>
      </Modal>
    </span>
  );
}
