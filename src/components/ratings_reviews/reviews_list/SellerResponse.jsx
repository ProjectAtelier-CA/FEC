import React from 'react';
import { useDarkMode } from '../../shared/DarkModeProvider';

export default function SellerResponse({ response }) {
  const isDarkMode = useDarkMode();
  return (
    <div className={`seller-response ${isDarkMode ? 'active-dark' : ''}`}>
      <span>
        Response from Seller:
      </span>
      <div>
        {response}
      </div>
    </div>
  );
}
