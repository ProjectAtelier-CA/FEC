import React, { useState, useEffect } from 'react';

// take average of all ratings
const parseRatings = ratings => {
  return Object.entries(ratings).reduce((a, b) => {
    return [ b[0]*b[1] + a[0], +b[1] + a[1] ];
  }, [0, 0]).reduce((a, b) => a/b);
};

// if no default, take first one
const parseStyles = styles => {
  const chosen = styles.results.reduce((a, b) => {
    return b['default?'] ? b : a;
  });

  return {
    originalPrice: chosen.original_price,
    salePrice: chosen.sale_price,
    photo: chosen.photos[0]
  };
};

export default function useFetch(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resultsRaw = (await Promise.all([
          fetch(`/products/${id}`),
          fetch(`/products/${id}/styles`),
          fetch(`/products/${id}/related`),
          fetch(`/reviews/meta?product_id=${id}`)
        ])).map(res => res.json());

        const results = await Promise.all(resultsRaw);

        if (results.some(res => res === null)) {
          throw new Error('Bad status code detected');
        }

        const { name, category, features } = results[0];
        const { originalPrice, salePrice, photo } = parseStyles(results[1]);
        const [relatedProducts, rating] = [results[2], parseRatings(results[3].ratings)];
        
        setLoading(null);
        setData({
          id, name, category, features, relatedProducts,
          originalPrice, salePrice, photo, rating
        });

      } catch (err) {
        setLoading(null);
        setError(err.message);
      }
    }
    
    setLoading('Loading...');
    fetchData();

  }, [id]);

  //console.log(data)
  return { loading, data, error };
};
