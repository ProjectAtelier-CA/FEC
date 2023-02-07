// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { MdModeNight } from 'react-icons/md';
import { GiAmericanShield, GiOctopus } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { useDarkMode } from '../shared/DarkModeProvider';
// import axios from 'axios';

export default function Nav({ goDark, dark }) {
  // const [search, setSearch] = useState('');
  // const [searched, setSearched] = useState(false);

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8081/products')
  //     .then(({ data }) => {
  //       console.log(data);
  //       setResults(data);
  //     });
  // }, []);
  const isDark = useDarkMode();

  function handleSearch(event) {
    console.log(event.target.value);
  }

  function setDarkMode() {
    goDark(!dark);
  }

  return (
    <div className={`navBar ${isDark ? 'dark-mode-nav' : 'light-mode-nav'}`}>
      <div className="logo">
        { dark
          ? <GiOctopus className="dark-logo" />
          : <GiAmericanShield className="light-logo" />}
      </div>
      <div className="searchWrapper">
        <input className={`search ${isDark ? 'dark-mode-search' : 'light-mode-search'}`} type="text" onChange={handleSearch} />
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

// {
//   results.length > 0 && searched
//     ? (
//       results.map((product) => (
//         <div id={product.id} key={product.id}>
//           <span>{product.name}</span>
//           <span>{product.default_price}</span>
//         </div>
//       ))
//     ) : null
// }
