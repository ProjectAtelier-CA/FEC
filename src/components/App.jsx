import React from 'react';
import RelatedProducts from './related_products/rp_index.jsx';
import RRIndex from './ratings_reviews/RRIndex.jsx';
import QA from './qa/qa_index.jsx';
import OIndex from './overview/Oindex.jsx';

export default function App() {
  return (
    <>
      <h1>All Our Components</h1>
      <OIndex />
      <RelatedProducts />
      <QA />
      <RRIndex />
    </>

  )
}