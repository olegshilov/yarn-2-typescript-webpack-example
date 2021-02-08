import React, { ReactNode, ReactElement, useMemo, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { ExampleActions, createExampleActions } from './exampleActions';

export const ExampleActionsContext = createContext<ExampleActions | undefined>(
  undefined,
);

export function ExampleActionsContainer({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const dispatch = useDispatch();
  const actions = useMemo(() => createExampleActions(dispatch), [dispatch]);

  return (
    <ExampleActionsContext.Provider value={actions}>
      {children}
    </ExampleActionsContext.Provider>
  );
}
