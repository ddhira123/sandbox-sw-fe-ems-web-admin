import React from 'react';
import { render } from '@testing-library/react';
import Select, { Option } from '../index';

describe('Select | Option', () => {
  it('should render correctly', () => {
    const app = render(
      <Select>
        <Option value="val1">val1</Option>
        <Option value="val2">val2</Option>
      </Select>,
    );
    expect(app).toMatchSnapshot();
  });
});
