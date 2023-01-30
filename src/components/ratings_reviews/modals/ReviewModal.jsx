import React, { useState, useEffect, useRef } from 'react';
import Characteristic from './Characteristic';
import ReviewErrorMessage from './ReviewErrorMessage';

// Todo: Validation for form inputs (half complete)
// Todo: Submitting will do a POST request to the api endpoint
// Todo: Upload photo functionality

export default function ReviewModal({ setShowReviewModal }) {
  const [recommended, setRecommended] = useState(true);
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [quality, setQuality] = useState(0);
  const [length, setLength] = useState(0);
  const [fit, setFit] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviewTextValid, setReviewTextValid] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const errorRef = useRef(null);

  useEffect(() => {
    if (reviewText.length >= 50) {
      setReviewTextValid(true);
    } else if (reviewText.length < 50) {
      setReviewTextValid(false);
    }
  }, [reviewText]);

  useEffect(() => {
    if (showErrorMsg) {
      errorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showErrorMsg]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewTextValid) {
      setShowErrorMsg(true);
    } else {
      setShowErrorMsg(false);
      setShowReviewModal(false);
      console.log('Valid submission');
    }
  };

  const sizeSelections = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];
  const widthSelections = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  const comfortSelections = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  const qualitySelections = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
  const lengthSelections = ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
  const fitSelections = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];

  const handleModalOutsideClick = () => {

  }

  return (
    <div
      className="review-modal-container"
      onClick={() => setShowReviewModal(false)}
    >
      <div className="review-modal-content">
        <h4>Review Modal Component</h4>
        <div>
          <div>Write Your Review</div>
          <div>About the [Product Name Here]</div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <h5>Overall Rating (Stars clickable here) (mandatory)</h5>
            </div>
            <div>
              <h5>Do you recommend this product? (mandatory)</h5>
              <label>
                Yes:
                <input required type="radio" name="recommended" onChange={() => setRecommended(true)} />
              </label>
              <label>
                No:
                <input type="radio" name="recommended" onChange={() => setRecommended(false)} />
              </label>
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
            <div>
              <h5>Review Summary</h5>
              <div>
                <div>Review Summary Text input (using text area 60 chars limit):</div>
                <textarea maxLength="60" rows="2" cols="30" placeholder="Example: Best purchase ever!" />
              </div>
            </div>
            <div>
              <h5>Review Body (mandatory)</h5>
              <div>
                <div>Review Body Text Input (also using text area 1000 chars limit):</div>
                <textarea required="required" minLength="50" maxLength="1000" rows="8" cols="40" placeholder="Why did you like the product or not?" value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                <div>
                  {reviewText.length <= 50 ? `Minimum required characters left: [ ${50 - reviewText.length} ]` : 'Minimum reached' }
                </div>
              </div>
            </div>
            <div>
              <h5>Upload your photos (5 photos max)</h5>
              <div>
                <button type="button">Add a photo</button>
              </div>
            </div>
            <div>
              <h5>What is your nickname (mandatory)</h5>
              <div>
                <input required type="text" placeholder="Example: jackson11!" />
                <div>For privacy reasons, do not use your full name or email address</div>
              </div>
            </div>
            <div>
              <h5>Your email (mandatory)</h5>
              <div>
                <input required type="email" maxLength="60" placeholder="Example: jackson11@email.com" />
                <div>For authentication reasons, you will not be emailed</div>
              </div>
            </div>
            <br />
            <button type="submit">Submit</button>
            <div ref={errorRef}>
              {showErrorMsg ? <ReviewErrorMessage /> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
