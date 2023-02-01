/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export default function PhotoList({ photo }) {
  return (
    <div>
      <img className="image-answer" alt="img-answer" src={photo.url} />
      {' '}
    </div>
  );
}
