/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { MdFacebook } from 'react-icons/md';
import { BsPinterest } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

export default function Share() {
  return (
    <div>
      <MdFacebook href="https://www.facebook.com/sharer/sharer.php?u=example.org" />
      <BsPinterest />
      <AiFillTwitterCircle />
      <div className="fb-share-button" data-href="https://www.google.com" data-layout="button" data-size="small">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">Share</a>

      </div>
    </div>
  );
}
