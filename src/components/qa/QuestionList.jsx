/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import QuestionListItem from './QuestionListItem.jsx';

export default function QuestionList({ productIdData }) {
  const [showMore, setMore] = useState(true);
  const [showLess, setLess] = useState(false);
  const [questionLog, setLog] = useState(2);
  const questionLength = productIdData.length;
  const [sortedQuestions, setSorted] = useState([]);

  let renderQuestions = productIdData.slice(0, questionLog);

  useEffect(() => {
    if (questionLog >= questionLength) {
      setMore(false);
      setLess(true);
    }
  });

  useEffect(() => {
    setSorted(productIdData.sort((q1, q2) => ((q1.helpfulness < q2.helpfulness) ? 1 : (q1.helpfulness > q2.helpfulness) ? -1 : 0)));
  });

  const loadQuestions = () => {
    setLog(questionLog + 2);
    renderQuestions = sortedQuestions.slice(0, questionLog);
  };
  const unloadQuestions = () => {
    setLog(2);
    renderQuestions = sortedQuestions.slice(0, questionLog);
    setLess(false);
  };

  return (
    <section>
      {renderQuestions.map((question) => (<QuestionListItem key={question.question_id} q={question} />))}
      { showMore ? <button type="button" onClick={loadQuestions}> Load More Questions </button> : null }
      {console.log(sortedQuestions)}
      {showLess ? <button type="button" onClick={unloadQuestions}> Top</button> : null}
    </section>
  );
}
