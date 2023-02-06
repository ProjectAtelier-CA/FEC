import React from 'react';

export default function ReviewErrorMessage() {
  return (
    <div className="review-error-message">
      <ul>
        <div data-testid='error-test'>This error will occur if:</div>
        <li>Any mandatory fields are left blank</li>
        <li>Body text is less than 50 characters</li>
        <li>Email address provided is not in the correct email format</li>
        <li>Images provided are invalid or unable to be uploaded</li>
      </ul>
    </div>
  );
}
