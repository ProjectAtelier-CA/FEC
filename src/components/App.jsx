/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import RelatedProducts from './related_products/RelatedProducts';
import RatingsReviews from './ratings_reviews/RatingsReviews';
import QuestionsAnswers from './qa/QuestionsAnswers';
import Overview from './overview/Overview';
import StarReference from './shared/StarReference';
import '../styles/styles.scss';
import { GiAmericanShield } from 'react-icons/gi';
import { DarkModeProvider } from './shared/DarkModeProvider';

/* ----------- Set up id state -------------- */
export default function App() {
  // later this initial id should be passed down from index.jsx as props
  const [id, setId] = useState(37313);
  const [dark, goDark] = useState(false);
  const [appAvgRating, setAppAvgRating] = useState(5);
  const [productDetails, setDetails] = useState({});
  const [styles, setStyles] = useState([]);
  const [overviewLoading, setOverviewLoading] = useState(true);
  // console.log(appAvgRating);

  return (
    <DarkModeProvider dark={dark}>
      {/* This component provides reference for Star Rating component, don't remove it */}
      <StarReference />
      <Overview
        goDark={goDark}
        dark={dark}
        appAvgRating={appAvgRating}
        details={productDetails}
        setDetails={setDetails}
        styles={styles}
        setStyles={setStyles}
        isLoading={overviewLoading}
        setLoading={setOverviewLoading}
        product_id={id}
      />
      {
        overviewLoading
          ? (
            <GiAmericanShield className="overview-loader" />
          )
          : (
            <>
              <RelatedProducts id={id} setId={setId} />
              <h3 className="testing-header"> Questions and Answers</h3>
              <QuestionsAnswers id={id} productName="A Purty Pink Jacket" />
              <RatingsReviews productID={id} productName="Dummy Product Name" setAppAvgRating={setAppAvgRating} />
            </>
          )
      }
    </DarkModeProvider>
  );
}
