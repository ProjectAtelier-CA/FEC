import React, {useState, useEffect} from 'react';
import QuestionListItem from './QuestionListItem.jsx';

const QuestionList = (props) => {

  return (
    <section id='question-list'>
      Question List
      <QuestionListItem/>
    </section>
  )
}

export default QuestionList;