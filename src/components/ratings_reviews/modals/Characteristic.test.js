import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Characteristic from './Characteristic';

const sizeSelections = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'];

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check Characteristic is rendered', async () => {
    render(<Characteristic selectionNames={sizeSelections} charType={"Size"}/>);
    return expect(screen.getByTestId('characteristics-test')).toBeTruthy();
  });

});
