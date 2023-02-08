import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import RatingsReviews from './RatingsReviews';

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if our components are rendered', async () => {
    render(<RatingsReviews productID={37331} productName={"test"}/>);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('ratings-reviews-test')).toBeTruthy();
      })
  });

});
