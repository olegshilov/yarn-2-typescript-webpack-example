import React from 'react';
import { render } from '@testing-library/react';
import { SmartComponent } from './SmartComponent';

describe('<ExampleComponent />', () => {
  it('should render correctly', () => {
    const { getByText } = render(<SmartComponent isBold />);

    expect(getByText('SmartComponent')).toBeTruthy();
  });
});
