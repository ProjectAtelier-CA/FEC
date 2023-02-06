/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import AnswerListItem from './AnswerListItem';

export default function AnswerList({ answers }) {
// map the props.answers
// use some state to render
  const [showMore, setMore] = useState(true);
  const [showLess, setLess] = useState(false);
  const [sortedAnswers, setSorted] = useState([]);
  const [answerLog, setLog] = useState(2);
  const answerLength = answers.length;
  const sortBySeller = [];
  let sellers = {};
  let renderAnswer = [];
  useEffect(() => {
    if (answerLog > answerLength) {
      setMore(false);
      setLess(true);
    }
    if (answers.length === 2) {
      console.log(answers);
      setMore(false);
      setLess(false);
    }
  });
  useEffect(() => {
    if (answerLength < 2) {
      setLess(false);
    }
  });

  const firstSort = () => {
    answers.forEach((answer) => {
      if (answer.answerer_name === 'Seller') {
        sellers = answer;
        answers.splice(answers.indexOf(answer), 1);
        answers.unshift(sellers);
      }
    });
    renderAnswer = answers.slice(0, answerLog);
  };
  firstSort();

  const loadAnswers = () => {
    setLog(answerLog + 2);
    firstSort();
  };

  const unloadAnswers = () => {
    setMore(true);
    setLess(false);
    setLog(2);
    renderAnswer = sortBySeller.slice(0, answerLog);
  };
  return (
    <section className="answer-list">
      { (renderAnswer.length !== 0)
        ? (
          <div className="align-answers">
            <div className="answer-list-use">
              <div className="a-tag">
                A:
              </div>
              <div className="answers">
                {renderAnswer.map((answer) => (<AnswerListItem key={answer.answer_id} ans={answer} />))}
              </div>

            </div>
          </div>
        ) : null}
      { showMore ? <button type="button" className="more-answer-button" onClick={loadAnswers}> Load More Answers</button> : null }
      {showLess ? <button type="button" className="less-answer-button" onClick={unloadAnswers}>See Less </button> : null}
    </section>
  );
}
