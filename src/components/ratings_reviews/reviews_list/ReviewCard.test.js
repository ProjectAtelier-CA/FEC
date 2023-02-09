import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import ReviewCard from './ReviewCard';

const mockReview = {
  "review_id": 584768,
  "rating": 1,
  "summary": "Est eligendi non aut debitis natus sed nobis.",
  "recommend": false,
  "response": null,
  "body": "Et similique ratione nihil. Cum amet aut optio saepe tempora omnis. Ipsam quis aut voluptatibus hic maiores. Eum doloribus maiores et atque pariatur. Qui recusandae iure in et quam animi at quam. Incidunt id mollitia optio consequuntur velit tempora.",
  "date": "2021-08-07T00:00:00.000Z",
  "reviewer_name": "Aaron_Wyman",
  "helpfulness": 36,
  "photos": [
      {
          "id": 1122315,
          "url": "https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
          "id": 1122316,
          "url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
          "id": 1122317,
          "url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
      }
  ]
}

describe('Jest', () => {
  const user = userEvent.setup();

  it('should check if ReviewCard is rendered', async () => {
    render(<ReviewCard review={mockReview} />);
    return expect(screen.getByTestId('review-card-test')).toBeTruthy();
  });

});
