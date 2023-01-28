/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListItem from './AnswerListItem';

export default function AnswerList({ answers }) {
// map the props.answers
// use some state to render
  const [ans, setAnswers] = useState([]);
  const [load, setLoading] = useState(true);

  useEffect(() => {
    setAnswers(...answers);
    setLoading(false);
  }, []);

  if (!load) {
    return (
      <section>
        {answers.map((answer) => (<AnswerListItem ans={answer} />))}
        {/* <AnswerListItem ans={answers} /> */}
        <button type="button"> Load More Answers </button>
      </section>
    );
  }
}
