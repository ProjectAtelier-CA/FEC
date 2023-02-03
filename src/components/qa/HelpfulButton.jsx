import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HelpfulButton({ helpfulness, id, type }) {
  const [clicked, setClicked] = useState(false);
  const [firstClick, setFirst] = useState(false);
  const [help, setHelp] = useState(helpfulness);
  const [upClick, setUp] = useState(true);

  const upVote = () => {
    setClicked(true);
    setHelp(help + 1);
    setFirst(true);
    axios.post('http://localhost:8081/helpful', null, { params: { id, type } });
  };
  const downVote = () => {
    setClicked(false);
    setHelp(help - 1);
    setUp(false);
  };

  const fakeUpVote = () => {
    setHelp(help + 1);
    setClicked(true);
    setUp(true);
  };

  return (
    <>
      <span className="helpful-button" data-testid="test-question">
        Helpful?
        {' '}
        {' '}
        {!firstClick ? (
          <button data-testid="helpful-button" className="helpful-button-yes" onClick={upVote} type="button">
            {' '}
            Yes(
            {help}
            )
          </button>
        ) : null}
      </span>
      {clicked ? (
        <button className="helpful-button" onClick={downVote} type="button">
          {' '}
          Yes(
          {help}
          )
        </button>
      ) : null}
      {!upClick ? (
        <button className="helpful-button" onClick={fakeUpVote} type="button">
          {' '}
          Yes(
          {help}
          )
        </button>
      ) : null}
    </>
  );
}
