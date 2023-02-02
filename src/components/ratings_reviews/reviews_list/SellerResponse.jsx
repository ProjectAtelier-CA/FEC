import React from 'react';

export default function SellerResponse({ response }) {
  return (
    <div className="seller-response">
      <span>
        Response from Seller:
      </span>
      <div>
        {response}
      </div>
    </div>
  );
}
