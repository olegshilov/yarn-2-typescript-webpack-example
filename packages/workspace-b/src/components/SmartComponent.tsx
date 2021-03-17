import React, { ReactElement } from 'react';
import { useExampleActions } from '../hooks/useExampleActions';
import { useExampleState } from '../hooks/useExampleState';
import { StyledButton } from './StyledComponents';

// This component uses redux. It can change redux state with actions.
// State and Actions available by `useExampleState` and `useExampleActions`hooks.
// To correct work og these hook component must be wrapped with `ExampleContainer` component.
export function SmartComponent({ isBold }: { isBold?: boolean }): ReactElement {
  const { count } = useExampleState();
  const { increment, decrement } = useExampleActions();

  return (
    <div>
      <p>
        current count:{' '}
        <span style={isBold ? { fontWeight: 'bold' } : undefined}>{count}</span>
      </p>
      <StyledButton onClick={decrement}>decrement</StyledButton>{' '}
      <StyledButton primary onClick={increment}>
        increment
      </StyledButton>
    </div>
  );
}
