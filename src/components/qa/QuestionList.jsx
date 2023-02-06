/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import QuestionListItem from './QuestionListItem.jsx';
import App from './AddQuestion';

export default function QuestionList({ productIdData, product_id, productName }) {
  const [showMore, setMore] = useState(true);
  const [showLess, setLess] = useState(false);
  const [questionLog, setLog] = useState(2);
  const questionLength = productIdData.length;
  const [sortedQuestions, setSorted] = useState([]);
  const [search, setSearch] = useState('');
  const [isSearching, setSearching] = useState(false);
  let renderQuestions = [];
  // let renderQuestions = productIdData.slice(0, questionLog);
  const searching = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  if (search.length < 3) {
    renderQuestions = productIdData.slice(0, questionLog);
  } else if (search.length > 2) {
    renderQuestions = [];
    // eslint-disable-next-line array-callback-return
    productIdData.filter((question) => {
      if (question.question_body.match(search)) {
        renderQuestions.push(question);
      }
    });
  }

  useEffect(() => {
    if (search.length < 3) {
      setSearching(false);
    } else if (search.length > 2) {
      setSearching(true);
    }
  }, [search]);

  useEffect(() => {
    if (questionLog >= questionLength) {
      setMore(false);
      setLess(true);
    }
  }, [questionLog]);

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
    <div>
      <input className="search-bar-question" value={search} onChange={searching} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <div className="question-list">
        {(productIdData.length === 0 && !isSearching) ? <div>No Questions Asked Yet. Try Asking One</div> : null}
        { (renderQuestions.length === 0 && isSearching) ? <div>No Results Matching Search. Try Again</div> : null}
        {renderQuestions.map((question) => (<QuestionListItem key={question.question_id} productName={productName} q={question} />))}
      </div>
      <div className="bottom-buttons-questions">
        { showMore ? <button type="button" className="more-question-button" onClick={loadQuestions}> More Answered Questions</button> : null }
        {(showLess && productIdData.length !== 0) ? <button type="button" className="more-question-button" onClick={unloadQuestions}> Top</button> : null}
        <App productName={productName} product_id={product_id} />
      </div>
    </div>
  );
}
