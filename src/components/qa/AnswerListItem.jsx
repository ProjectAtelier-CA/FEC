/* eslint-disable max-len */
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
      <div className="answer-body">
        {ans.body}
      </div>
      <div className="image-answer-list">
        {(ans.photos.length > 0) ? ans.photos.map((photo) => (<PhotoList photo={photo} />)) : null}
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
        <ReportButton answerId={ans.answer_id} />
      </div>
    </>

  );
}
