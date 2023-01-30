/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListItem from './AnswerListItem';

export default function AnswerList({ answers }) {
// map the props.answers
// use some state to render
  const [showMore, setMore] = useState(true);
  const [answerLog, setLog] = useState(2);
  const answerLength = answers.length;

  let renderAnswer = answers.slice(0, answerLog);

  useEffect(() => {
    if (answerLog >= answerLength) {
      setMore(false);
    }
  });

  const loadAnswers = () => {
    setLog(answerLog + 2);
    renderAnswer = answers.slice(0, answerLog);
  };

  return (
    <section>
      {renderAnswer.map((answer) => (<AnswerListItem key={answer.answer_id} ans={answer} />))}
      { showMore ? <button type="button" onClick={loadAnswers}> Load More Answers </button> : null }
    </section>
  );
}
