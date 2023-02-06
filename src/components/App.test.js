import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';

describe('Jest', function() {
  const user = userEvent.setup();

  it ('should say all our components', () => {
    render(<App />)
    expect(screen.getByTestId('app-test')).toHaveTextContent('All Our Components');
  })
})

