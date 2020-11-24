import React from 'react';
import { render } from '@testing-library/react';
import DatePicker from '../DatePicker';

describe('DatePicker', () => {
  it('should render correctly', () => {
    const app = render(<DatePicker />);
    expect(app).toMatchSnapshot();
  });
});
