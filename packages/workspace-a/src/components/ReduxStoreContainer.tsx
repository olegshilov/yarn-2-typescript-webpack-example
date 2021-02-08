import React, { ReactElement, ReactNode } from 'react';
import { Provider as ReduxStoreProvider } from 'react-redux';
import {
  applyMiddleware,
  Store,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import { exampleReducer, ExampleState, ExampleAction } from 'workspace-b';

export interface RootState {
  example: ExampleState;
}

export type RootActions = ExampleAction;

export function useReduxStore(): Store<RootState, RootActions> {
  const rootReducer = combineReducers({
    example: exampleReducer,
  });
  const loggerMiddleware = createLogger({
    collapsed: true,
  });
  const enhancers = applyMiddleware<Middleware, RootState>(loggerMiddleware);
  const store = createStore(rootReducer, enhancers);

  return store;
}

export function ReduxStoreContainer({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const store = useReduxStore();

  return <ReduxStoreProvider store={store}>{children}</ReduxStoreProvider>;
}
