import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import RatingsBreakdown from './RatingsBreakdown';

const mockData = {
  product_id: '37331',
  ratings: {
    1: '5',
    2: '6',
    4: '7',
    5: '46',
  },
  recommended: {
    false: '18',
    true: '46',
  },
  characteristics: {
    Fit: {
      id: 125096,
      value: '3.2911392405063291',
    },
    Length: {
      id: 125097,
      value: '3.5949367088607595',
    },
    Comfort: {
      id: 125098,
      value: '3.2469135802469136',
    },
    Quality: {
      id: 125099,
      value: '3.5060240963855422',
    },
  },
};

const mockStarFilter = {
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false
}

const mockFunc = () => {};

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if RatingsBreakdown is rendered', async () => {
    render(<RatingsBreakdown reviewMetaData={mockData} starFilter={mockStarFilter} setAppAvgRating={mockFunc}/>);
    return expect(screen.getByTestId('ratings-breakdown-test')).toBeTruthy();
  });
});
