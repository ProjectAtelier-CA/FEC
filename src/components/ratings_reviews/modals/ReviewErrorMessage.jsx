import React from 'react';

export default function ReviewErrorMessage() {
  return (
    <div className="review-error-message">
      <div>This error will occur if:</div>
      <div>Any mandatory fields are blank</div>
      <div>The review body is less than 50 characters</div>
      <div>The email address provided is not in the correct email format</div>
      <div>The images selected are invalid or unable to be uploaded</div>
    </div>
  );
}
