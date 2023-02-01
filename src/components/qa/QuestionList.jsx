/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import QuestionListItem from './QuestionListItem.jsx';
import App from './AddQuestion';

export default function QuestionList({ productIdData, product_id }) {
  const [showMore, setMore] = useState(true);
  const [showLess, setLess] = useState(false);
  const [questionLog, setLog] = useState(2);
  const questionLength = productIdData.length;
  const [sortedQuestions, setSorted] = useState([]);
  const [search, setSearch] = useState('');
  let renderQuestions = [];
  // let renderQuestions = productIdData.slice(0, questionLog);
  const searching = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    // if (search.length > 1) {
    //   renderQuestions = [];
    //   productIdData.filter((question) => {
    //     if (question.question_body.includes(search)) {
    //       console.log(renderQuestions);
    //       return renderQuestions.push(question);
    //       // questionMatch.push(question);
    //       console.log(renderQuestions);
    //       // renderQuestions = questionMatch;
    //     }
    // });
    // }
  };

  if (search.length < 3) {
    renderQuestions = productIdData.slice(0, questionLog);
  } else if (search.length > 2) {
    renderQuestions = [];
    productIdData.filter((question) => {
      if (question.question_body.match(search)) {
        renderQuestions.push(question);
      }
    });
    console.log('renderQuestion', renderQuestions);
  }

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
    setMore(true);
    renderQuestions = sortedQuestions.slice(0, questionLog);
    setLess(false);
  };

  return (
    <section>
      <input value={search} onChange={searching} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      { (renderQuestions.length === 0) ? <div>No Results Matching Search. Try Again</div> : null}
      {renderQuestions.map((question) => (<QuestionListItem key={question.question_id} q={question} />))}
      <div className="bottom-buttons">
        { showMore ? <button type="button" onClick={loadQuestions}> More Answered Questions</button> : null }
        {showLess ? <button type="button" onClick={unloadQuestions}> Top</button> : null}
        <App product_id={product_id} />
      </div>
    </section>
  );
}
