import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import ReviewErrorMessage from './ratings_reviews/modals/ReviewErrorMessage';
import Buttons from './overview/buttons/buttons';

describe('Jest', function() {
  const user = userEvent.setup();

  it ('should say all our components', () => {
    render(<ReviewErrorMessage />)
    expect(screen.getByTestId('error-test')).toHaveTextContent('This error will occur if:');
  });

  it ('should include a quantity dropdown', () => {
    render(<Buttons />);
    expect((screen.getByTestId('test')).toBeInTheDocument);
  })
})