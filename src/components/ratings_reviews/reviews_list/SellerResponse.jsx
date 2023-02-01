import React from 'react';

export default function SellerResponse({ response }) {
  return (
    <div className="seller-response">
      <span>
        Seller Response:
      </span>
      <div>
        {response}
      </div>
    </div>
  );
}
