import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

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

export default function App() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [newQuestion, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');

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
          <input className="add-answer-input" value={newQuestion} placeholder="max:1000chars" />
          {' '}
          <br />
          <label> Enter Nickname</label>
          <label className="label-answer-modal">*</label>
          <label>:</label>
          <br />
          <input className="add-answer-modal" value={nickname} placeholder="Example: jack1234" required />
          {' '}
          <br />
          <label className="label-answer-modal">For privacy reasons, do not use your full name or email address</label>
          {' '}
          <br />
          <label>Enter Email</label>
          <label className="label-answer-modal">*</label>
          <label>:</label>
          <br />
          <input className="add-answer-modal" value={email} placeholder="jack@email.com" />
          <br />
          <label className="label-answer-modal"> For authentication reasons, you will not be emailed</label>
          <br />
        </form>
        <button type="button" onClick={() => setOpen(false)}>Submit</button>
      </Modal>
    </span>
  );
}
