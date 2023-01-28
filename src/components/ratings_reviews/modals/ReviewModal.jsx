import React, { useState } from 'react';
import Characteristic from './Characteristic';

export default function ReviewModal() {
  const [recommended, setRecommended] = useState(true);
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);

  const handleSizeChange = (num) => {
    setSize(num);
  };

  const handleWidthChange = (num) => {
    setWidth(num);
  };

  const handleComfortChange = (num) => {
    setComfort(num);
  };

  const handleQualityChange = (num) => {
    setQuality(num);
  };

  const handleLengthChange = (num) => {
    setLength(num);
  };

  const handleFitChange = (num) => {
    setFit(num);
  };

  const sizeSelections = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];
  const widthSelections = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  const comfortSelections = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  const qualitySelections = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
  const lengthSelections = ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
  const fitSelections = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];

  return (
    <div>
      <h4>Review Modal Component</h4>
      <div>Write Your Review</div>
      <div>About the [Product Name Here]</div>
      <div>
        <form>
          <div>
            Overall Rating (Stars clickable here) (mandatory)
          </div>
          <div>
            Do you recommend this product? (mandatory)
            Yes:
            <input type="radio" name="recommended" onChange={() => setRecommended(true)} />
            No:
            <input type="radio" name="recommended" onChange={() => setRecommended(false)} />
          </div>
          <div>
            <h5>Characteristics (mandatory)</h5>
            <Characteristic handleChange={handleSizeChange} selectionNames={sizeSelections} charType="Size" />
            <Characteristic handleChange={handleWidthChange} selectionNames={widthSelections} charType="Width" />
            <Characteristic handleChange={handleComfortChange} selectionNames={comfortSelections} charType="Comfort" />
            <Characteristic handleChange={handleQualityChange} selectionNames={qualitySelections} charType="Quality" />
            <Characteristic handleChange={handleLengthChange} selectionNames={lengthSelections} charType="Length" />
            <Characteristic handleChange={handleFitChange} selectionNames={fitSelections} charType="Fit" />
          </div>
        </form>
      </div>
    </div>
  );
}