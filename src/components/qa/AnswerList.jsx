/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import AnswerListItem from './AnswerListItem';

export default function AnswerList({ answers }) {
// map the props.answers
// use some state to render
  const [showMore, setMore] = useState(true);
  const [sortedAnswers, setSorted] = useState([]);
  const [answerLog, setLog] = useState(2);
  const answerLength = answers.length;

  let renderAnswer = answers.slice(0, answerLog);

  useEffect(() => {
    if (answerLog >= answerLength) {
      setMore(false);
    }
  });

  useEffect(() => {
    setSorted(answers.sort((a1, a2) => ((a1.helpfulness < a2.helpfulness) ? 1 : (a1.helpfulness > a2.helpfulness) ? -1 : 0)));
  });

  const loadAnswers = () => {
    setLog(answerLog + 2);
    renderAnswer = sortedAnswers.slice(0, answerLog);
  };
  return (
    <section>
      {renderAnswer.map((answer) => (<AnswerListItem key={answer.answer_id} ans={answer} />))}
      { showMore ? <button type="button" onClick={loadAnswers}> Load More Answers </button> : null }
    </section>
  );
}
