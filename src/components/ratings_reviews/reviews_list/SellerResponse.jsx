import React from 'react';

export default function SellerResponse({ response }) {
  return (
    <div>
      (Optional) SellerResponse Statement (conditional render)
      {response}
    </div>
  );
}
