/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import PhotoList from './PhotoList';
import ReportButton from './ReportButton';
import HelpfulButton from './HelpfulButton';

export default function AnswerListItem({ ans }) {
  // if there are pictures map them
  // if (ans.photos.length > 0) {
  //   setPhotos(true);
  // }

  return (
    <>
      <div className="answer-body">
        A:
        {ans.body}
        {ans.photos.map((photo) => (<PhotoList key={ans.answer_id} photo={photo} />))}
      </div>
      <div className="answerer-info">
        by
        {' '}
        {ans.answerer_name}
        ,
        {' '}
        {ans.date}
        {' '}
        <HelpfulButton helpfulness={ans.helpfulness} id={ans.answer_id} type="answers" />
        {' '}
        |
        {' '}
        <ReportButton />
      </div>
    </>

  );
}
