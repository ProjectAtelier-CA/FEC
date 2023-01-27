/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';

export default function QuestionsAnswers() {
  return (
    <section>
      <div className="question-answers">
        Questions and Answers
      </div>
      <Search />
      <QuestionList />
    </section>
  );
}
