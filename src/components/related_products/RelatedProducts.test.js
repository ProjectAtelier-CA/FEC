import React from 'react';
import RelatedProducts from './RelatedProducts';
import {render} from '@testing-library/react';

describe('Easy Tests on RelatedProduct Component', () => {
  it("Should render without crashing", () => {
    render(<RelatedProducts />);
  });
});
