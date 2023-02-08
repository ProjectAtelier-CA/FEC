import React from 'react';
import '@testing-library/jest-dom';
// import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import StarMeaning from './StarMeaning';


describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if our components are rendered', async () => {
    render(<StarMeaning score={0} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if our components are rendered', async () => {
    render(<StarMeaning score={1} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if our components are rendered', async () => {
    render(<StarMeaning score={2} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if our components are rendered', async () => {
    render(<StarMeaning score={3} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if our components are rendered', async () => {
    render(<StarMeaning score={4} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

  it('should check if our components are rendered', async () => {
    render(<StarMeaning score={5} />);
    return expect(screen.getByTestId('star-meaning-test')).toBeTruthy();
  });

});
