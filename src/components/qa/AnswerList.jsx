/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';

export default function AnswerList() {
// map the props.answers
// use some state to render
  return (
    <section>
      <div>
        A: Here is an answer
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
