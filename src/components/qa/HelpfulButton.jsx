import React, { useState } from 'react';
import axios from 'axios';

export default function HelpfulButton({ helpfulness, id, type }) {
  const [clicked, setClicked] = useState(false);
  const [help, setHelp] = useState(helpfulness);

  const upVote = () => {
    setClicked(true);
    setHelp(help + 1);
    console.log('tis is question_id', id);
    axios.post('http://localhost:8081/helpful', null, { params: { id, type } });
  };

  const downVote = () => {
    setClicked(false);
    setHelp(help - 1);
  };

  return (
    <>
      <span className="helpful-button" data-testid="test-question">
        Helpful?
        {' '}
        {' '}
        {!clicked ? (
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
    </>
  );
}
