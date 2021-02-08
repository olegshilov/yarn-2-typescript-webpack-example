import React, { ReactElement } from 'react';
import { ReduxStoreContainer } from './ReduxStoreContainer';
import { ExampleActionsContainer } from 'workspace-b';
import { App } from './App';

export function AppContainer({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <ReduxStoreContainer>
      <ExampleActionsContainer>{children}</ExampleActionsContainer>
    </ReduxStoreContainer>
  );
}

export function Root(): ReactElement {
  return (
    <AppContainer>
      <App />
    </AppContainer>
  );
}
