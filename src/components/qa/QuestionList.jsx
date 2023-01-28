/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import QuestionListItem from './QuestionListItem.jsx';

export default function QuestionList({ productIdData }) {
  console.log('this is product id', productIdData);
  return (
    <section>
      {productIdData.map((question) => (<QuestionListItem key={question.question_id} q={question} />))}
    </section>
  );
}
