import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Label } from '../index';

describe('Label', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const message = 'test message';
    const { getByTestId } = render(<Label message={message} />);
    expect(getByTestId('message').textContent).toEqual(message);
  });
});
