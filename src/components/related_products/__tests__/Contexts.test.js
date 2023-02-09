import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PropsProvider, useProps } from '../Contexts';

const testProps = {
  primitiveValue: 'Shen',
  referenceValue: ['yellow', 'pink', 'red']
};

const errMessage = 'useProps must be used under a PropsProvider';

function TestChild() {
  const { primitiveValue, referenceValue } = useProps();

  return (
    <div>
      <p>{ primitiveValue }</p>
      <ul>{ referenceValue.map(val => (<li key={ val }>{ val }</li>)) }</ul>
    </div>
  );
}

describe('testing the functionality of PropsProvider', () => {
  test('Should raise error if used outside provider', () => {
    try {
      // suppress the error console for better DX
      jest.spyOn(console, 'error').mockImplementation(() => {});

      render(
        < >
          <TestChild />
          <PropsProvider { ...testProps } />
        </>
      );
    } catch (err) {
      expect(err.message).toStrictEqual(errMessage);
    }
  });

  test('Should get all props when used within provider, regardless of depth', () => {
    render(
      <PropsProvider { ...testProps }>
        <div>
          <div>
            <TestChild />
          </div>
        </div>
      </PropsProvider>
    );

    // primitive value should be obtained
    screen.getByText(testProps.primitiveValue);
    
    // reference value should also be obtained
    const listItems = screen.queryAllByRole('listitem');
    const listItemValues = listItems.map(li => li.textContent);
    expect(listItemValues).toEqual(testProps.referenceValue);
  });
});
