import { useContext } from 'react';
import { ExampleActionsContext } from '../redux/ExampleActionsContainer';
import { ExampleActions } from '../redux/exampleActions';

export function useExampleActions(): ExampleActions {
  const actions = useContext(ExampleActionsContext);

  if (!actions) {
    throw new Error(
      'useExampleActions() should be used inside ExampleActionsContext',
    );
  }

  return actions;
}
