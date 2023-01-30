/* eslint-disable import/extensions */
import React from 'react';

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
import Styles from './styles/styles';
import Buttons from './buttons/buttons';

// DESCRIPTION
import Description from './product_description/product_description';
import '../../styles/overviewStyles/_overview.scss';

export default function Overview() {
  return (
    <>
      <Nav />
      <Banner />
      <div className="image-and-info">
        <ImageCarousel />
        <div className="product-info">
          <ProductInfo />
          {/* <Styles /> */}
          {/* <Buttons /> */}
        </div>
      </div>
      <Description />
    </>
  );
}
