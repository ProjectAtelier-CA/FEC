/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList';
import HelpfulButton from './HelpfulButton';
import App from './AddAnswer';

export default function QuestionListItem({ q, productName }) {
  const [allAnswers, setAns] = useState([]);
  const [loading, setLoad] = useState(true);
  const { question_id } = q;

  useEffect(() => {
    axios.get('/answers', { params: { question_id } }).then(({ data }) => {
      const result = data.results;
      setAns(result);
      setLoad(false);
    });
  }, []);

  if (!loading) {
    return (
      <div className="question-body" key={question_id}>
        <span className="q-tag">
          Q:
        </span>
        {q.question_body}
        <div className="question-buttons">
          <HelpfulButton helpfulness={q.question_helpfulness} id={question_id} type="questions" />
          {' '}
          |
          {' '}
          <App questionBody={q.question_body} productName={productName} question_id={question_id} />
        </div>
        <div className="answer-in-question">
          {(allAnswers.length !== 0) ? <AnswerList key={question_id} answers={allAnswers} /> : null}
        </div>

      </div>
    );
  }
}
