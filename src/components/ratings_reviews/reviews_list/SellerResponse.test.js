import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import SellerResponse from './SellerResponse';

const response = "Test Reponse"

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if SellerResponse is rendered', async () => {
    render(<SellerResponse response={response} />);
    return expect(screen.getByTestId('seller-reponse-test')).toBeTruthy();
  });

});
