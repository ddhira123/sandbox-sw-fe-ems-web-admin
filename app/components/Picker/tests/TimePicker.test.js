import React from 'react';
import { render } from '@testing-library/react';
import TimePicker from '../TimePicker';

describe('TimePicker', () => {
  it('should render correctly', () => {
    const app = render(<TimePicker />);
    expect(app).toMatchSnapshot();
  });
});
