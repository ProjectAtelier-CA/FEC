import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import Buttons from './buttons/buttons';

describe('Jest', function() {
  const user = userEvent.setup();

  it ('should include a quantity dropdown', () => {
    render(<Buttons />);
    expect((screen.getByTestId('test')).toBeInTheDocument);
  })
})