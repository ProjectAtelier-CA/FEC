/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import PhotoList from './PhotoList';
import ReportButton from './ReportButton';
import HelpfulButton from './HelpfulButton';
import UserDateInfo from '../shared/UserDateInfo';

export default function AnswerListItem({ ans }) {
  // if there are pictures map them
  // if (ans.photos.length > 0) {
  //   setPhotos(true);
  // }

  return (
    <>
      <div className="answer-body" key={ans.answer_id}>
        A:
        {ans.body}
        <div className="image-answer-list">
          {ans.photos.map((photo) => (<PhotoList photo={photo} />))}
        </div>
      </div>
      <div className="answerer-info">
        by
        {' '}
        <UserDateInfo user={ans.answerer_name} date={ans.date} />
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
