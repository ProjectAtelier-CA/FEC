import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import RatingsReviews from './RatingsReviews';

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if our components are rendered', () => {
    render(<RatingsReviews />);
    setTimeout(() => expect(screen.getByTestId('ratings-reviews-test')).containsMatchingElement(<RatingsBreakdown />), 3000);
  });

  it('should check if our components are rendered', () => {
    render(<RatingsReviews />);
    setTimeout(() => expect(screen.getByTestId('ratings-reviews-test')).containsMatchingElement(<ReviewsList />), 3000);
  });

});