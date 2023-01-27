/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';

export default function QuestionListItem() {
  return (
    <section style={{ border: 'Orange 2px solid' }} className="question-list-items">
      <div> Q: the question will go here with Helpful button and Add answer</div>
      <AnswerList />
      <div />
    </section>
  );
}
