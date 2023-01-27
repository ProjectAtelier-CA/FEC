// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function Nav() {
  return (
    <div className="navBar">
      <div className="logo">LOGO</div>
      <div className="searchWrapper">
        <input className="search" type="text" />
        <span className="search-icon">ICON</span>
      </div>
    </div>
  );
}
