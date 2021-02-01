import React from 'react';
import { render } from '@testing-library/react';
import { Root } from './Root';

describe('<Root />', () => {
  it('should exist', () => {
    expect(Root).toBeDefined();
  });

  it('should render correctly', () => {
    const { container, getByText } = render(<Root />);

    expect(container.hasChildNodes()).toBeTruthy();
    expect(getByText('Root')).toBeTruthy();
    expect(getByText('ExampleComponent')).toBeTruthy();
  });
});
