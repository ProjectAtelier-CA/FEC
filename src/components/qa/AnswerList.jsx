/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export default function AnswerList({ answer }) {
// map the props.answers
// use some state to render

  return (
    <section>
      <div className="answer-body">
        A: answers go here
      </div>
      <div> Here is user information, helpful button, report button</div>
      <div> Picture here they are clickable </div>
      <div>
        A: Here is an answer 2
      </div>
      <div> Here is user information, helpful button, report button</div>
      <button type="button"> Load More Answers </button>

    </section>
  );
}
