import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import HelpfulButton from './qa/HelpfulButton';

describe('Jest', () => {
  const user = userEvent.setup();

  it('should have helpful? in DOM', () => {
    render(<HelpfulButton />);
    expect(screen.getByTestId('test-question')).toHaveTextContent('Helpful?');
  });

  it('should have  a button', () => {
    render(<HelpfulButton />);
    expect(screen.getByTestId('helpful-button')).toBeInTheDocument();
  });
});
