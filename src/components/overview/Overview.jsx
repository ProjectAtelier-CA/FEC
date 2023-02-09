/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// NAV
import Nav from './navbar';

// BANNER
import Banner from './announcement';

// MAIN IMAGE
import ImageCarousel from './main_image/image_carousel';

// PRODUCT INFO
import ProductInfo from './product_header/product_info';

// DESCRIPTION
import Description from './product_description/product_description';
import '../../styles/overviewStyles/_overview.scss';

import { useDarkMode } from '../shared/DarkModeProvider';

export default function Overview({
  goDark, dark, appAvgRating, details, setDetails, styles, setStyles, isLoading, setLoading, product_id, handleTrackClick, reviewsRef,
}) {
  const [imageIndex, setIndex] = useState(0);
  const [currentStyle, setStyle] = useState(0);
  const [imgToStyles, setImgToStyles] = useState([]);
  const [skus, setSkus] = useState({});
  const [currentSku, setSku] = useState('');
  const [photos, setPhotos] = useState([]);
  const [styleClick, clickStyle] = useState(false);

  function getStyles() {
    let iToS = [];
    axios.get(`/products/${product_id}/styles`)
      .then(({ data }) => {
        data.results.forEach((style, index) => {
          const N = style.photos.length;
          iToS = iToS.concat(Array(N).fill(index));
        });
        return data.results;
      })
      .then((results) => {
        setStyles(results);
        setSkus(results[0].skus);
        setSku(Object.keys(results[0].skus)[0]);
        setPhotos(results.map((style) => style.photos).flat());
      })
      .then(() => {
        setImgToStyles(iToS);
      })
      .catch(() => {
        console.log('failed to get products with id');
      });
  }

  function getProduct() {
    axios.get(`/products/${product_id}`)
      .then(({ data }) => {
        setDetails(data);
      });
  }

  useEffect(() => {
    getStyles();
    setStyle(0);
    setIndex(0);
    getProduct();
  }, [product_id]);

  useEffect(() => {
    if (Object.keys(skus).length > 0 && photos.length > 0 && details !== undefined) {
      setLoading(false);
    }
  }, [skus, details]);

  if (isLoading) {
    return (
      <>
        <Nav />
        <div className="overview-loader" data-testid="loading" />
      </>
    );
  }

  return (
    <div className="overview" id="OverviewScroll" onClick={(e) => handleTrackClick(e, 'Overview')} data-testid="overview">
      <Nav goDark={goDark} dark={dark} data-testid="nav" />
      <div className="spacer">
        <Banner
          data-testid="banner"
          className="banner-div"
          styles={styles}
          setStyle={setStyle}
          setIndex={setIndex}
          clickStyle={clickStyle}
        />
      </div>
      <div className="image-and-info">
        <ImageCarousel
          key={product_id}
          imageIndex={imageIndex}
          setIndex={setIndex}
          setStyle={setStyle}
          styles={styles}
          setSkus={setSkus}
          imgToStyle={imgToStyles}
          currentSku={currentSku}
          setSku={setSku}
          currentStyle={currentStyle}
          product_id={product_id}
          photos={photos}
          clickStyle={clickStyle}
          styleClick={styleClick}
          data-testid="carousel"
        />
        <div className="product-info">
          <ProductInfo
            details={details}
            imageIndex={imageIndex}
            setIndex={setIndex}
            styles={styles}
            imgToStyle={imgToStyles}
            currentStyle={currentStyle}
            setStyle={setStyle}
            skus={skus}
            setSkus={setSkus}
            isLoading={isLoading}
            currentSku={currentSku}
            setSku={setSku}
            product_id={product_id}
            clickStyle={clickStyle}
            appAvgRating={appAvgRating}
            reviewsRef={reviewsRef}
            data-testid="info"
          />
        </div>
      </div>
      <div className="desc-div">
        <Description
          product_id={product_id}
          details={details}
          data-testid="description"
        />
      </div>
    </div>
  );
}
