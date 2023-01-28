/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import '../../styles/questionsAnswers/_QA.scss';

export default function QuestionsAnswers() {
  const [productId, setId] = useState('37311');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8081/questions').then(({ data }) => {
      const result = data.results;
      setLoading(false);
      // reviews will be an array of objects
      setQuestions(result);
    });
  }, []);

  if (!loading) {
    return (
      <section>
        <div className="question-answers">
          Questions and Answers
        </div>
        <Search />
        {
        !loading
          ? <QuestionList productIdData={questions} />
          : null
}
      </section>
    );
  }
}

const fakedata = {
  product_id: '37311',
  results: [
    {
      question_id: 644533,
      question_body: 'Here is a question, what time is it?',
      question_date: '2022-12-15T00:00:00.000Z',
      asker_name: 'Edgar',
      question_helpfulness: 26,
      reported: false,
      answers: {
        5989836: {
          id: 5989836,
          body: 'test to add an answer',
          date: '2022-12-15T00:00:00.000Z',
          answerer_name: 'tester',
          helpfulness: 5,
          photos: [],
        },
        5989848: {
          id: 5989848,
          body: 'testing answe body',
          date: '2022-12-15T00:00:00.000Z',
          answerer_name: 'testuser',
          helpfulness: 0,
          photos: [],
        },
        5989855: {
          id: 5989855,
          body: 'It is time to have awesome day and look dope in your camo onesie',
          date: '2022-12-16T00:00:00.000Z',
          answerer_name: 'rando',
          helpfulness: 0,
          photos: [],
        },
        5989887: {
          id: 5989887,
          body: "it's 1:52",
          date: '2022-12-16T00:00:00.000Z',
          answerer_name: 'hello',
          helpfulness: 0,
          photos: [],
        },
        5989893: {
          id: 5989893,
          body: 'This is an answer to your question!',
          date: '2022-12-16T00:00:00.000Z',
          answerer_name: 'orchid',
          helpfulness: 2,
          photos: [],
        },
      },
    },
  ],
};
