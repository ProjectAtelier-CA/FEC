import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import ReviewModalPhoto from './ReviewModalPhoto';

const photoUrl = 'https://images.unsplash.com/photo-1674592309639-39067f6a8111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80'

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if ReviewModalPhoto is rendered', async () => {
    render(<ReviewModalPhoto photoUrl={photoUrl} />);
    return expect(screen.getByTestId('review-modal-photo-test')).toBeTruthy();
  });

});
