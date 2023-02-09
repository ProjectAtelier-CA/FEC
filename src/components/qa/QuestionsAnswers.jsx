/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import '../../styles/questionsAnswers/_QA.scss';
import AddQuestions from './AddQuestion';
import { useDarkMode } from '../shared/DarkModeProvider';

export default function QuestionsAnswers({ id, productName, handleTrackClick }) {
  const [productId, setId] = useState(37316);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const activateDark = useDarkMode();

  useEffect(() => {
    axios.get('/questions', { params: { id } }).then(({ data }) => {
      const result = data.results;
      setLoading(false);
      setQuestions(result);
    });
  }, [id]);

  return (
    loading
      ? (
        <div>
          Loading...
        </div>
      )
      : (
        <section id="QAScroll">
        <div onClick={(e) => handleTrackClick(e, 'Questions and Answers')}>
          <div className="master-question">
            {
        !loading
          ? <QuestionList productName={productName} product_id={id} productIdData={questions} />
          : null
         }
          </div>
        </div>
        </section>
      )
  );
}
