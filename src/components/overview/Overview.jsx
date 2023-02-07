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

// STYLES
// eslint-disable-next-line import/no-named-as-default
// import Styles from './styles/styles';
// import Buttons from './buttons/buttons';

// DESCRIPTION
import Description from './product_description/product_description';
import '../../styles/overviewStyles/_overview.scss';

export default function Overview({
  goDark, dark, appAvgRating, details, setDetails, styles, setStyles, isLoading, setLoading, product_id, handleTrackClick,
}) {
  const [imageIndex, setIndex] = useState(0);
  const [currentStyle, setStyle] = useState(0);
  const [imgToStyles, setImgToStyles] = useState([]);
  const [styleObject, setStyleObject] = useState(null);
  const [skus, setSkus] = useState({});
  const [currentSku, setSku] = useState('');
  const [photos, setPhotos] = useState([]);
  const [styleClick, clickStyle] = useState(false);

  let iToS = [];

  function getStyles() {
    axios.get(`http://127.0.0.1:8081/products/${product_id}/styles`)
      .then(({ data }) => {
        data.results.forEach((style, index) => {
          const N = style.photos.length;
          iToS = iToS.concat(Array(N).fill(index));
        });
        return data.results;
      })
      .then((results) => {
        setStyles(results);
        setStyleObject(results[0]);
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
    axios.get(`http://127.0.0.1:8081/products/${product_id}`)
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
    if (Object.keys(skus).length > 0 && photos.length > 0) {
      setLoading(false);
    }
  }, [skus]);

  if (isLoading) {
    return (
      <>
        <Nav />
        <div className="overview-loader" />
      </>
    );
  }

  return (
    <div className="overview" onClick={(e) => handleTrackClick(e, 'Overview')}>
      <Nav goDark={goDark} dark={dark} />
      <div className="spacer">
        <Banner
          className="banner-div"
          styles={styles}
          setStyle={setStyle}
          setIndex={setIndex}
          setStyleObject={setStyleObject}
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
          styleObject={styleObject}
          setStyleObject={setStyleObject}
          currentStyle={currentStyle}
          product_id={product_id}
          photos={photos}
          clickStyle={clickStyle}
          styleClick={styleClick}
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
            styleObject={styleObject}
            setStyleObject={setStyleObject}
            skus={skus}
            setSkus={setSkus}
            isLoading={isLoading}
            currentSku={currentSku}
            setSku={setSku}
            product_id={product_id}
            clickStyle={clickStyle}
            appAvgRating={appAvgRating}
          />
        </div>
      </div>
      <Description product_id={product_id} details={details} />
    </div>
  );
}
