/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import '../../styles/questionsAnswers/_QA.scss';
import AddQuestions from './AddQuestion';

export default function QuestionsAnswers({ id, productName }) {
  const [productId, setId] = useState(37316);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8081/questions', { params: { id } }).then(({ data }) => {
      console.log('this is id: ', id);
      const result = data.results;
      setLoading(false);
      setQuestions(result);
    });
  }, [id]);

  if (!loading) {
    return (
      <div>
        {/* <h3 className="question-header"> Questions and Answers</h3> */}
        <div className="master-question">
          {
        !loading
          ? <QuestionList productName={productName} product_id={id} productIdData={questions} />
          : null
         }
        </div>
      </div>
    );
  }
}
