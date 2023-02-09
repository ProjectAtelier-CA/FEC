import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProductModal from '../ProductModal';

// fake products obj, but provide same data
const currentProduct = {
  name: 'currentProduct',
  features: [
    { feature: 'featureA', value: 'value1' },
    { feature: 'featureB', value: 'value2' },
    { feature: 'featureC', value: 'value3' }
  ]
};

const onClickProduct = {
  name: 'onClickProduct',
  features: [
    { feature: 'featureE', value: 'value4' },
    { feature: 'featureB', value: 'value5' },
    { feature: 'featureC', value: 'value6' }
  ]
};

// mock function
const closeModal = jest.fn(); 

const testProps = { currentProduct, onClickProduct, closeModal };

// expected row context
const expectedRowTexts =[
  /currentProduct.*onClickProduct/,
  'value1' + 'featureA' + '',
  'value2' + 'featureB' + 'value5',
  'value3' + 'featureC' + 'value6',
  '' + 'featureE' + 'value4'
];

describe('Modal should function correctly', () => {
 
  test('Should render Data correctly', () => {
    render(<ProductModal { ...testProps } />);

    // should have at least a table
    screen.getByRole('table');
  
    // all rows should be rendered correctly
    const rows = screen.queryAllByRole('row');
    rows.forEach((row, index) => {
      expect(row).toHaveTextContent(expectedRowTexts[index]);
    });
  });

  test('Should invoke closeModal correctly', () => {
    const { container } = render(<ProductModal { ...testProps } />);
    
    // when modal is clicked, nothing should happen
    const table = screen.queryByRole('table');
    fireEvent.click(table);
    expect(closeModal).not.toHaveBeenCalled();

    // when elsewhere (container <section>) is clicked, the modal is closed
    fireEvent.click(container.firstChild);
    expect(closeModal).toHaveBeenCalled();
  });
});


