/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import QuestionListItem from './QuestionListItem';

export default function Search({ questionList }) {
  const [search, setSearch] = useState('');
  const [questionSearch, setQuestionSearch] = useState([]);

  const questionMatch = [];

  const searching = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    if (search.length > 1) {
      questionList.filter((question) => {
        if (question.question_body.match(search)) {
          questionMatch.push(question);
          console.log(questionMatch);
          return questionMatch.map((quest) => (<QuestionListItem q={quest} />));
        }
      });
    }
  };

  return (
    <section className="search-bar-questions">
      <form>
        <input value={search} onChange={searching} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      </form>
    </section>
  );
}
