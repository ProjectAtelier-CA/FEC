/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';

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
        <AnswerList answers={allAnswers} />
      </div>
    );
  }
  }