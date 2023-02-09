import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useFetch from '../useFetch';
import ProductCard from '../ProductCard';
import { PropsProvider } from '../Contexts';

// get mock data
import { mockId, mockStyle, mockProduct, mockRelated, mockReviewMeta } from '../mockData';

describe('Product Card && useFetch Hook', () => {

  test('Should render data correctly', async () => {
    render(
      <PropsProvider>
        <ProductCard type='related' id={ mockId } />
      </PropsProvider>
    );
  
    expect(await screen.findByText(mockProduct.name)).toBeInTheDocument();
  });

  test.skip('Should distinguish between button and card click event', () => {

  });
});




