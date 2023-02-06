// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line camelcase
export default function Description({ product_id }) {
  // eslint-disable-next-line no-unused-vars
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line camelcase
    axios.get(`http://127.0.0.1:8081/products/${product_id}`)
      .then(({ data }) => {
        setDetails(data);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

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

Description.propTypes = {
  // images: PropTypes.array.isRequired
};
