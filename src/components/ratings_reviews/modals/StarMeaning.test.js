import React from 'react';
import '@testing-library/jest-dom';
// import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import StarMeaning from './StarMeaning';


describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if Star 0 is correctly rendered', async () => {
    render(<StarMeaning score={0} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if Star 1 is correctly rendered', async () => {
    render(<StarMeaning score={1} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if Star 2 is correctly rendered', async () => {
    render(<StarMeaning score={2} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if Star 3 is correctly rendered', async () => {
    render(<StarMeaning score={3} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if Star 4 is correctly rendered', async () => {
    render(<StarMeaning score={4} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if Star 5 is correctly rendered', async () => {
    render(<StarMeaning score={5} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

});
