/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import Overview from './Overview';
import Banner from './announcement';
import Buttons from './buttons/buttons';

describe('Jest', () => {
  const user = userEvent.setup();

  it('should include a quantity dropdown', () => {
    render(<App />);
    expect((screen.getByTestId('overview')).toBeInTheDocument);
    return waitFor(() => expect(screen.getByTestId('loader')).not.toBeInTheDocument())
      .then(() => {
        expect((screen.getByTestId('overview')).toBeInTheDocument);
      });
  });
});
