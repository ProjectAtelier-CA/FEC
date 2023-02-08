import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import HelpfulButton from './qa/HelpfulButton';
import ReportButton from './qa/ReportButton';
import QuestionList from './qa/QuestionList';
import QuestionsAnswers from './qa/QuestionsAnswers';
import AnswerList from './qa/AnswerList';
import AnswerListItem from './qa/AnswerListItem';
import QuestionListItem from './qa/QuestionListItem';
import AddAnswer from './qa/AddAnswer';
import AddQuestion from './qa/AddQuestion';
import PhotoList from './qa/PhotoList';

describe('Jest', () => {
  const user = userEvent.setup();

  it('should have helpful? in DOM', () => {
    render(<HelpfulButton />);
    expect(screen.getByTestId('test-question')).toHaveTextContent('Helpful?');
  });

  it('should have  a helpful button', () => {
    render(<HelpfulButton />);
    expect(screen.getByTestId('helpful-button')).toBeInTheDocument();
  });

  it('should have  a report button', () => {
    render(<ReportButton />);
    expect(screen.getByTestId('report-button')).toBeInTheDocument();
  });

  it('should render main page', () => {
    render(<QuestionsAnswers id={37316} productName="testy" />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());
  });

  it('should render main page', () => {
    render(<PhotoList photo={[]} />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());
  });



  it('should render question list item', () => {
    render(<QuestionListItem
      q={{
        question_id: 644533,
        question_body: 'Here is a question, what time is it?',
        question_date: '2022-12-15T00:00:00.000Z',
        asker_name: 'Edgar',
        question_helpfulness: 26,
        reported: false,
        answers: {
          5989836: {
            id: 5989836,
            body: 'test to add an answer',
            date: '2022-12-15T00:00:00.000Z',
            answerer_name: 'tester',
            helpfulness: 5,
            photos: [],
          },
        },
      }}
      productName="testy"
    />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());
  });

  it('should render answer list ', () => {
    render(<AnswerList answers={[{
      id: 5989848,
      body: 'testing answe body',
      date: '2022-12-15T00:00:00.000Z',
      answerer_name: 'testuser',
      helpfulness: 0,
      photos: [],
    }]}
    />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());
  });

  it('should render answer list item ', () => {
    render(<AnswerListItem ans={{
      id: 5989848,
      body: 'testing answe body',
      date: '2022-12-15T00:00:00.000Z',
      answerer_name: 'testuser',
      helpfulness: 0,
      photos: [],
    }}
    />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());
  });
  it('should render add answer', () => {
    render(<AddAnswer />);
    expect(screen.getByRole('button', { name: /Add Answer/ })).toBeInTheDocument();
  });

  it('should render add answer', () => {
    render(<AddQuestion />);
    expect(screen.getByRole('button', {name: /Add Question/ })).toBeInTheDocument();
  });
  it('should render add answer', () => {
    render(<AddQuestion />);
    expect(screen.queryByText(/Add Questio/)).toBeInTheDocument();
  });

  it('should render questionlist', () => {
    render(<QuestionList
      productIdData={[{
        product_id: '37311',
        results: [
          {
            question_id: 644533,
            question_body: 'Here is a question, what time is it?',
            question_date: '2022-12-15T00:00:00.000Z',
            asker_name: 'Edgar',
            question_helpfulness: 26,
            reported: false,
            answers: {
              5989836: {
                id: 5989836,
                body: 'test to add an answer',
                date: '2022-12-15T00:00:00.000Z',
                answerer_name: 'tester',
                helpfulness: 5,
                photos: [],
              },
              5989848: {
                id: 5989848,
                body: 'testing answe body',
                date: '2022-12-15T00:00:00.000Z',
                answerer_name: 'testuser',
                helpfulness: 0,
                photos: [],
              },
              5989855: {
                id: 5989855,
                body: 'It is time to have awesome day and look dope in your camo onesie',
                date: '2022-12-16T00:00:00.000Z',
                answerer_name: 'rando',
                helpfulness: 0,
                photos: [],
              },
              5989887: {
                id: 5989887,
                body: "it's 1:52",
                date: '2022-12-16T00:00:00.000Z',
                answerer_name: 'hello',
                helpfulness: 0,
                photos: [],
              },
              5989893: {
                id: 5989893,
                body: 'This is an answer to your question!',
                date: '2022-12-16T00:00:00.000Z',
                answerer_name: 'orchid',
                helpfulness: 2,
                photos: [],
              },
            },
          },
        ],
      },
      ]}
      productName="testy"
      product_id={37311}
    />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());
  });
});
