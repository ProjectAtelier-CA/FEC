/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { MdFacebook } from 'react-icons/md';
import { BsPinterest } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

export default function Share() {
  return (
    <div className="social-buttons">
      <div className="fb-share-button" data-href="https://www.google.com" data-layout="button" data-size="small">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">
          <MdFacebook className="social-media" />
        </a>
      </div>
      <div>
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Check%20this%20out"
        >
          <AiFillTwitterCircle className="social-media" />
        </a>
      </div>
      <div>
        <a href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonPin" data-pin-config="beside" data-pin-color="red" data-pin-height="28">

          <BsPinterest className="social-media pinterest" />
        </a>
        <script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js" />
      </div>
    </div>
  );
}
