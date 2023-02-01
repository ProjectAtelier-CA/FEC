import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import ReviewErrorMessage from './ratings_reviews/modals/ReviewErrorMessage';

describe('Jest', function() {
  const user = userEvent.setup();

  it ('should say all our components', () => {
    render(<ReviewErrorMessage />)
    expect(screen.getByTestId('error-test')).toHaveTextContent('This error will occur if:');
  })
})