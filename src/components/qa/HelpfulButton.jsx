import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HelpfulButton({ helpfulness, id, type }) {
  const [clicked, setClicked] = useState(false);
  const [help, setHelp] = useState(helpfulness);
  const [upClick, setUp] = useState(true);

  const upVote = () => {
    setClicked(true);
    setHelp(help + 1);
    setFirst(true);
    axios.post('/helpful', null, { params: { id, type } });
  };

  return (
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
      { clicked ? <span className="yes-helpful-span"> Yes({help})</span> : null }
    </span>
  );
}
