// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { MdModeNight } from 'react-icons/md';
import { GiAmericanShield, GiOctopus } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
// import axios from 'axios';

export default function Nav({ goDark, dark }) {
  // const [search, setSearch] = useState('');
  // const [results, setResults] = useState([]);
  // const [searched, setSearched] = useState(false);

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8081/products')
  //     .then(({ data }) => {
  //       console.log(data);
  //       setResults(data);
  //     });
  // }, []);

  function setDarkMode() {
    goDark(!dark);
  }

  return (
    <div className="navBar">
      <div className="logo">
        { dark
          ? <GiOctopus className="dark-logo" />
          : <GiAmericanShield className="light-logo" />}
      </div>
      <div className="searchWrapper">
        <input className="search" type="text" />
        <FaSearch className="search-icon" />
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
