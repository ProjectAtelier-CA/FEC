import React from 'react';
import { format } from 'date-fns';

// This function takes a user and date prop
export default function UserDateInfo({ user, date }) {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');

  return (
    <span>
      <span className="review-user">{ `${user}, `}</span>
      <span>{`${formattedDate}`}</span>
    </span>
  );
}
