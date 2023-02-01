import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Characteristic from './Characteristic';
import ReviewErrorMessage from './ReviewErrorMessage';
import StarRatingReview from './StarRatingReview';
import StarMeaning from './StarMeaning';

// Todo: Upload photo functionality
// Todo: Validating photo urls
// Todo: Setting star rating

export default function ReviewModal({ setShowReviewModal, reviewMetaData, setRerender }) {
  // console.log(reviewMetaData);
  const [starRating, setStarRating] = useState(0); // Star rating for product
  const [reviewSummary, setReviewSummary] = useState(''); // Review Summary
  const [reviewText, setReviewText] = useState(''); // Review Body
  const [recommended, setRecommended] = useState(true);
  const [username, setUsername] = useState(''); // Username
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]); // Array of photo urls
  const [charRatings, setCharRatings] = useState({}); // Object of char ratings

  const [showErrorMsg, setShowErrorMsg] = useState(false); // Validation check
  const errorRef = useRef(null); // Refs for error scrolling
  const outsideModalRef = useRef(null);


  useEffect(() => {
    if (showErrorMsg) {
      errorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showErrorMsg]);

  const handleRatingClick = (num, id) => {
    setCharRatings({ ...charRatings, [id]: num });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.length < 50 || !starRating) {
      setShowErrorMsg(true);
    } else {
      setShowErrorMsg(false);
      setShowReviewModal(false);
      console.log('Valid submission');
      axios.post('http://localhost:8081/reviews', {
        data: {
          product_id: Number(reviewMetaData.product_id),
          rating: 5,
          summary: reviewSummary,
          body: reviewText,
          recommend: recommended,
          name: username,
          email,
          photos,
          characteristics: charRatings,
        },
      }).then(() => {
        setRerender([]);
      });
    }
  };

  // { this is test data, will remove later
  //   "product_id": 37331,
  //   "rating": 5,
  //   "summary": "Test summary2",
  //   "body": "Test body2",
  //   "recommend": false,
  //   "name": "Andrew",
  //   "email": "andrew@andrew.com",
  //   "photos": [],
  //   "characteristics": {
  //       "125098": 5,
  //       "125096": 5,
  //       "125097": 5,
  //       "125099": 5
  //   }
  // }

  const sizeSelections = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];
  const widthSelections = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  const comfortSelections = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  const qualitySelections = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
  const lengthSelections = ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
  const fitSelections = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];

  const currChars = Object.keys(reviewMetaData.characteristics);
  const charForms = currChars.map((char) => {
    const currKey = reviewMetaData.characteristics[char].id;
    // console.log(char);
    let currCharForm;
    if (char === 'Size') {
      currCharForm = <Characteristic key={currKey} handleChange={handleRatingClick} selectionNames={sizeSelections} charType="Size" charID={currKey} />;
    } else if (char === 'Width') {
      currCharForm = <Characteristic key={currKey} handleChange={handleRatingClick} selectionNames={widthSelections} charType="Width" charID={currKey} />;
    } else if (char === 'Comfort') {
      currCharForm = <Characteristic key={currKey} handleChange={handleRatingClick} selectionNames={comfortSelections} charType="Comfort" charID={currKey} />;
    } else if (char === 'Quality') {
      currCharForm = <Characteristic key={currKey} handleChange={handleRatingClick} selectionNames={qualitySelections} charType="Quality" charID={currKey} />;
    } else if (char === 'Length') {
      currCharForm = <Characteristic key={currKey} handleChange={handleRatingClick} selectionNames={lengthSelections} charType="Length" charID={currKey} />;
    } else if (char === 'Fit') {
      currCharForm = <Characteristic key={currKey} handleChange={handleRatingClick} selectionNames={fitSelections} charType="Fit" charID={currKey} />;
    }
    return currCharForm;
  });

  const handleModalOutsideClick = (e) => {
    if (e.target === outsideModalRef.current) {
      setShowReviewModal(false);
    }
  };

  return (
    <div
      className="review-modal-container"
      onClick={(e) => handleModalOutsideClick(e)}
      ref={outsideModalRef}
    >
      <div className="review-modal-content">
        <div className="review-header">
          <div>Write Your Review</div>
          <div>About the [Product Name Here]</div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="review-form">
            <div className="star-name-container">
              <div className="star-rec-container">
                <div>
                  <div className="star-rating">
                    <div>Rate the product *</div>
                    <StarRatingReview score={starRating} setStarRating={setStarRating} />
                    <StarMeaning score={starRating} />
                  </div>
                </div>
                <div className="modal-recommend">
                  <div>Do you recommend this product? *</div>
                  <div className="modal-rec-selection">
                    <label>
                      <span>Yes:</span>
                      <div>
                        <input required type="radio" name="recommended" onChange={() => setRecommended(true)} />
                      </div>
                    </label>
                    <label>
                      <span>No:</span>
                      <div>
                        <input type="radio" name="recommended" onChange={() => setRecommended(false)} />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="photo-container">
                  <div className="upload">
                    <span>Upload your photos (5 photos max)</span>
                    <button type="button">Add a photo</button>
                  </div>
                  <div className="photos">
                    <div className="individual-photo">1</div>
                    <div className="individual-photo">2</div>
                    <div className="individual-photo">3</div>
                    <div className="individual-photo">4</div>
                    <div className="individual-photo">5</div>
                  </div>
                </div>
              </div>
              <div className="name-email-container">
                <div className="username">
                  <div>What is your nickname *</div>
                  <input required type="text" placeholder="Example: jackson11!" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <div className="privacy-notice">For privacy reasons, do not use your full name or email address</div>
                </div>
                <div className="email">
                  <div>Your email *</div>
                  <input required type="email" maxLength="60" placeholder="Example: jackson11@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <div className="privacy-notice">For authentication reasons, you will not be emailed</div>
                </div>
              </div>
            </div>
            <div>
              <div className="review-summary-text">
                <div>Review Summary Text</div>
                <input maxLength="60" placeholder="Example: Best purchase ever!" value={reviewSummary} onChange={(e) => setReviewSummary(e.target.value)} />
              </div>
            </div>
            <div>
              <div className="review-body-text">
                <div className="text-header">Review Body Text Input *</div>
                <textarea required="required" minLength="50" maxLength="1000" rows="8" cols="40" placeholder="Why did you like the product or not?" value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                <div className="text-footer">
                  {reviewText.length <= 50 ? `Minimum required characters left: [ ${50 - reviewText.length} ]` : 'Minimum reached'}
                </div>
              </div>
            </div>
            <div className="char-container">
              <div>Characteristics *</div>
              <div className="char-forms">
                {charForms}
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
