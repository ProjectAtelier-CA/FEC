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

  let renderAnswer = answers.slice(0, answerLog);

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
  useEffect(() => {
    setSorted(answers.sort((a1, a2) => ((a1.helpfulness < a2.helpfulness) ? 1 : (a1.helpfulness > a2.helpfulness) ? -1 : 0)));
    // setSorted(answers.sort((a1, a2) => ((a1.answerer_name === 'Seller') ? 1 : (a2.answerer_name === 'Seller') ? -1 : 0)));
  });

  const loadAnswers = () => {
    setLog(answerLog + 2);
    renderAnswer = sortedAnswers.slice(0, answerLog);
  };

  const unloadAnswers = () => {
    setMore(true);
    setLess(false);
    setLog(2);
    renderAnswer = sortedAnswers.slice(0, answerLog);
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
