/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../../shared/DarkModeProvider';

// eslint-disable-next-line camelcase
export default function Description({ product_id, details }) {
  // eslint-disable-next-line no-unused-vars
  // const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const isDark = useDarkMode();

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
    loading
      ? (<div data-testid="final-load" />)
      : (
        <div className="o-description">
          <div className={`description-content ${isDark ? 'dark-description' : 'light-description'}`}>
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
                {att.feature.toLowerCase()}
              </div>
            </div>
          ))
        }
          </div>
        </div>
      )
  );
}
