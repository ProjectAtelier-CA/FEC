import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

const mockFunc = () => {};

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if our components are rendered', async () => {
    render(<ImageCarousel modalImagePhotos={[]} currImageIndex={0} setCurrImageIndex={mockFunc}/>);
    return expect(screen.getByTestId('image-carousel-test')).toBeTruthy();
  });

});
