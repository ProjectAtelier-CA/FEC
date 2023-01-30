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

  let renderQuestions = productIdData.slice(0, questionLog);

  useEffect(() => {
    if (questionLog >= questionLength) {
      setMore(false);
      setLess(true);
    }
  });

  const loadQuestions = () => {
    setLog(questionLog + 2);
    renderQuestions = productIdData.slice(0, questionLog);
  };
  const unloadQuestions = () => {
    setLog(questionLog - 2);
    renderQuestions = productIdData.slice(0, questionLog);
  };

  return (
    <section>
      {renderQuestions.map((question) => (<QuestionListItem key={question.question_id} q={question} />))}
      { showMore ? <button type="button" onClick={loadQuestions}> Load More Questions </button> : null }
      {showLess ? <button type="button" onClick={unloadQuestions}> Less Questions</button> : null}
    </section>
  );
}
