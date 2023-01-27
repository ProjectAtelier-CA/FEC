import React from 'react';

// NAV
import Nav from './navbar.jsx'

// BANNER
import Banner from './announcement.jsx'

// MAIN IMAGE
import ImageCarousel from './main_image/image_carousel.jsx'
import Thumbnails from './main_image/thumbnails.jsx'

// PRODUCT INFO
import ProductInfo from './product_header/product_info.jsx'

// STYLES
import Styles from './styles/styles.jsx'
import Buttons from './buttons/buttons.jsx'

// DESCRIPTION
import Description from './product_description/product_description.jsx'

const Overview = () => {

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

export default Overview;