/* eslint-disable import/extensions */
import React from 'react';

// NAV
import Nav from './navbar';

// BANNER
import Banner from './announcement';

// MAIN IMAGE
import ImageCarousel from './main_image/image_carousel';
import Thumbnails from './main_image/thumbnails';

// PRODUCT INFO
import ProductInfo from './product_header/product_info';

// STYLES
// eslint-disable-next-line import/no-named-as-default
import Styles from './styles/styles';
import Buttons from './buttons/buttons';

// DESCRIPTION
import Description from './product_description/product_description';

export default function Overview() {
  return (
    <>
      <Nav />
      <h1>
        Overview Component
      </h1>
      <Banner />
      <ImageCarousel />
      <Thumbnails />
      <ProductInfo />
      <Styles />
      <Buttons />
      <Description />
    </>
  );
}
