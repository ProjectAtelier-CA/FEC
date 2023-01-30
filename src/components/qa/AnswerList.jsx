/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListItem from './AnswerListItem';

export default function AnswerList({ answers }) {
// map the props.answers
// use some state to render
  const [ans, setAnswers] = useState([]);
  const [load, setLoading] = useState(2);


  useEffect(() => {
    setAnswers(...answers);
    setLoading(false);
  }, []);

  if (!load) {
    return (
      <section>
        {answers.map((answer) => (<AnswerListItem key={answer.answer_id} ans={answer} />))}
        <button type="button"> Load More Answers </button>
      </section>
    );
  }
}
