import React from 'react';
import { format } from 'date-fns';
import { useDarkMode } from './DarkModeProvider';

// This function takes a user and date prop
export default function UserDateInfo({ user, date }) {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
  const isDarkMode = useDarkMode();

  return (
    <span>
      <span className="review-user">{ `${user}, `}</span>
      <span className={`${isDarkMode ? 'active-dark' : ''}`}>{`${formattedDate}`}</span>
    </span>
  );
}
