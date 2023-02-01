import React from 'react';

// onInvalid={(e) => e.target.setCustomValidity('Please select a characteristic')}
// onInput={(e) => e.target.setCustomValidity('')}

export default function Characteristic({ handleChange, selectionNames, charType, charID }) {
  // selectionName should be an array of names for selections
  // handleChange should be the function that will change the state for the selection
  return (
    <div className="characteristics">
      <div className="selection-type">{charType}</div>
      <label className="selections">
        <div>{selectionNames[0]}</div>
        <div>
          <input
            required
            type="radio"
            name={charType}
            onChange={() => handleChange(1, charID)}
          />
        </div>
      </label>
      <label className="selections">
        <div>{selectionNames[1]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(2, charID)} />
        </div>
      </label>
      <label className="selections">
        <div>{selectionNames[2]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(3, charID)} />
        </div>
      </label>
      <label className="selections">
        <div>{selectionNames[3]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(4, charID)} />
        </div>
      </label>
      <label className="selections">
        <div>{selectionNames[4]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(5, charID)} />
        </div>
      </label>
    </div>
  );
}
