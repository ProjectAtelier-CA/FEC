/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PhotoList from './PhotoList';



export default function AnswerListItem({ ans }) {
  // if there are pictures map them
  const [isPhoto, setPhotos] = useState(false);
  // if (ans.photos.length > 0) {
  //   setPhotos(true);
  // }
  return (
    <div>
      A:
      {ans.body}
      {ans.photos.map((photo) => (<PhotoList key={ans.answer_id} photo={photo} />))}
    </div>

  );
}
