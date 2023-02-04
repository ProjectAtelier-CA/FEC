/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line camelcase
export default function Description({ product_id, details }) {
  // eslint-disable-next-line no-unused-vars
  // const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (details.slogan === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [product_id, details]);

  if (loading) {
    return (
      null
    );
  }

  return (
    <div className="o-description">
      <div className="description-content">
        <h3 className="o-title">{details.slogan}</h3>
        <p className="o-body">{details.description}</p>
      </div>
      <div className="divider" />
      <div className="attributes">
        {
          details.features.map((att) => (
            <div className="o-attribute" key={att.feature}>
              <div className="checkmark">✓</div>
              <div className="attribute-copy">
                {att.value}
                {' '}
                <div className="product-feature">{att.feature}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  );
}
