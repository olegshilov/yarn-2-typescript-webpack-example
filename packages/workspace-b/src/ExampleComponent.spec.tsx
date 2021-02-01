import React from 'react';
import { render } from '@testing-library/react';
import { ExampleComponent } from './ExampleComponent';

describe('<ExampleComponent />', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ExampleComponent />);

    expect(getByText('ExampleComponent')).toBeTruthy();
  });
});
