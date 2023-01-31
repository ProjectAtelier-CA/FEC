/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList';
import HelpfulButton from './HelpfulButton';

export default function QuestionListItem({ q }) {
  const [allAnswers, setAns] = useState([]);
  const [loading, setLoad] = useState(true);
  const { question_id } = q;

  useEffect(() => {
    axios.get('http://localhost:8081/answers', { params: { question_id } }).then(({ data }) => {
      const result = data.results;
      setAns(result);
      setLoad(false);
    });
  }, []);

  if (!loading) {
    return (
      <div className="question-body">
        Q:
        {q.question_body}
        <HelpfulButton helpfulness={q.question_helpfulness} id={question_id} type="questions" />
        {' '}
        |
        {' '}
        <button type="button" className="add-answer-button"> Add Answer</button>
        <AnswerList answers={allAnswers} />
      </div>
    );
  }
}
