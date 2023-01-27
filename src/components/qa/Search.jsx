/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';

function Search(props) {
  const [search, setSearch] = useState('');

  const liveSearch = (something) => {
    if (something.length > 1) {
      // console.log(search);
    }
  };
  const searching = (event) => {
    setSearch(event.target.value);
    liveSearch(search);
  };

  return (
    <section>
      <form>
        <input value={search} onChange={searching} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      </form>
    </section>
  );
}

export default Search;
