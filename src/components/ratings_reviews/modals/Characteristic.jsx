import React from 'react';

export default function Characteristic({ handleChange, selectionNames, charType }) {
  // selectionName should be an array of names for selections
  // handleChange should be the function that will change the state for the selection
  return (
    <div className="characteristics">
      <div className="selections">{charType}</div>
      <div className="selections">
        <div>{selectionNames[0]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(1)} />
        </div>
      </div>
      <div className="selections">
        <div>{selectionNames[1]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(2)} />
        </div>
      </div>
      <div className="selections">
        <div>{selectionNames[2]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(3)} />
        </div>
      </div>
      <div className="selections">
        <div>{selectionNames[3]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(4)} />
        </div>
      </div>
      <div className="selections">
        <div>{selectionNames[4]}</div>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(5)} />
        </div>
      </div>
    </div>
  );
}
