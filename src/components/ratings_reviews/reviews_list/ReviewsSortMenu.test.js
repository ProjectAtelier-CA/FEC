import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import ReviewsSortMenu from './ReviewsSortMenu';

const mockFunc = () => {};

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if our components are rendered', async () => {
    render(<ReviewsSortMenu setDebouncedSearch={mockFunc} setSearchInput={mockFunc} handleSortClick={mockFunc}/>);
    return expect(screen.getByTestId('sort-menu-test')).toBeTruthy();
  });

});
