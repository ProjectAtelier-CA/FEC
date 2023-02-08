import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import ReviewModal from './ReviewModal';

const mockData = {
  "product_id": "37313",
  "ratings": {
      "1": "5",
      "2": "3",
      "3": "20",
      "4": "44",
      "5": "26"
  },
  "recommended": {
      "false": "33",
      "true": "65"
  },
  "characteristics": {
      "Fit": {
          "id": 125036,
          "value": "2.4470588235294118"
      },
      "Length": {
          "id": 125037,
          "value": "2.6438356164383562"
      },
      "Comfort": {
          "id": 125038,
          "value": "2.7500000000000000"
      },
      "Quality": {
          "id": 125039,
          "value": "3.0259740259740260"
      },
      "Size": {
          "id": 125040,
          "value": "3.0259740259740260"
      },
      "Width": {
          "id": 125041,
          "value": "3.0259740259740260"
      }
  }
}

const setShowReviewModal = () => {};

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if our components are rendered', async () => {
    render(<ReviewModal productName={"test product"} reviewMetaData={mockData} setShowReviewModal={setShowReviewModal} />);
    return expect(screen.getByTestId('review-modal-test')).toBeTruthy();
  });

});
