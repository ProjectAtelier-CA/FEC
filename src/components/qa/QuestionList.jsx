/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import QuestionListItem from './QuestionListItem.jsx';

export default function QuestionList(props) {
  return (
    <section style={{ border: '2px solid' }} className="question-list">
      Question List
      <QuestionListItem />
    </section>
  );
}
