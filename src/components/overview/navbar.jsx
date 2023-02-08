/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { MdModeNight } from 'react-icons/md';
import { GiAmericanShield, GiOctopus } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { useDarkMode } from '../shared/DarkModeProvider';
// import axios from 'axios';

export default function Nav({ goDark, dark }) {
  const isDark = useDarkMode();

  function setDarkMode() {
    goDark(!dark);
  }

  return (
    <div className={`navBar ${isDark ? 'dark-mode-nav' : 'light-mode-nav'}`}>
      <div className="logoWrapper">
        <div className="logo">
          { dark
            ? <GiOctopus className="dark-logo" />
            : <GiAmericanShield className="light-logo" />}
        </div>
        <div className={`brand ${isDark ? 'dark-brand' : 'light-brand'}`}>
          {isDark ? 'Bucky\'s Closet' : 'Steve\'s Closet'}
        </div>
        <div className={`link ${isDark ? 'dark-link' : 'light-link'}`}>
          <a>Overview</a>
        </div>
        <div className={`link ${isDark ? 'dark-link' : 'light-link'}`}>
          <a>Related Products</a>
        </div>
        <div className={`link ${isDark ? 'dark-link' : 'light-link'}`}>
          <a>Q & A</a>
        </div>
        <div className={`link ${isDark ? 'dark-brand' : 'light-link'}`}>
          <a>Reviews</a>
        </div>
      </div>
      <div className="searchWrapper">
        <input className={`search ${isDark ? 'dark-mode-search' : 'light-mode-search'}`} type="text" />
        <FaSearch className={`search-icon ${isDark ? 'dark-mode-icon' : 'light-mode-icon'}`} />
        <button type="button" className="night-button" onClick={setDarkMode}>
          <MdModeNight
            className={`night-icon ${dark ? 'dark-mode' : 'light-mode'}`}
          />
        </button>
      </div>
    </div>
  );
}
