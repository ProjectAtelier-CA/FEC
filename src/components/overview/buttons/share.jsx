import React, { useState, useEffect, useRef } from 'react';
import { MdFacebook, } from 'react-icons/md';
import { BsPinterest, } from 'react-icons/bs';
import { AiFillTwitterCircle, } from 'react-icons/ai';


export default function Share() {
  return (
    <div>
      <MdFacebook href="https://www.facebook.com/sharer/sharer.php?u=example.org" />
      <BsPinterest />
      <AiFillTwitterCircle />
    </div>
  );
}
