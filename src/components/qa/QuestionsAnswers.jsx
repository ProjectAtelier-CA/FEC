import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';

const QuestionsAnswers = ()  => (
  <section>
  <div id='question-answers'>
    Questions and Answers
  </div>
    <Search/>
    <QuestionList/>
  </section>

)



export default QuestionsAnswers

