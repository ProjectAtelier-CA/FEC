import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import ProductBreakdownList from './ProductBreakdownList';

const mockData = {
  Fit: {
    id: 125036,
    value: '2.4470588235294118',
  },
  Length: {
    id: 125037,
    value: '2.6438356164383562',
  },
  Comfort: {
    id: 125038,
    value: '2.7500000000000000',
  },
  Quality: {
    id: 125039,
    value: '3.0259740259740260',
  },
  Size: {
    id: 125039,
    value: '3.0259740259740260',
  },
  Width: {
    id: 125039,
    value: '3.0259740259740260',
  },
};

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if ProductBreakdownList is rendered', async () => {
    render(<ProductBreakdownList chars={mockData} />);
    return expect(screen.getByTestId('char-bars-test')).toBeTruthy();
  });

});
