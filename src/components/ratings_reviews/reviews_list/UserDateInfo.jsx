import React from 'react';

export default function UserDateInfo({ user, date }) {
  return (
    <span>
      UserDateInfo by Username:
      {user}
      Date:
      {date}
    </span>
  );
}
