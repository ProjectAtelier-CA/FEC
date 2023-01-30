import React, { useState, useEffect } from 'react';

export default function HelpfulButton({helpfulness}) {
  return (
    <>
      Helpful?
      {' '}
      <button className="helpful-button" type="button">
        {' '}
        Yes
        {' '}
        {helpfulness}
      </button>
    </>
  );
}
