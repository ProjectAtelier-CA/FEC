// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Nav() {
  return (
    <div className="navBar">
      <div className="logo">&#9775;</div>
      <div className="searchWrapper">
        <input className="search" type="text" />
        <span className="search-icon">&#128269;</span>
      </div>
    </div>
  );
}
