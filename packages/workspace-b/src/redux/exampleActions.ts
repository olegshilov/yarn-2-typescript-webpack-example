import { Dispatch, Action } from 'redux';

export enum ExampleActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export type ExampleIncrementAction = Action<ExampleActionTypes.INCREMENT>;
export type ExampleDecrementAction = Action<ExampleActionTypes.DECREMENT>;

export type ExampleAction = ExampleIncrementAction | ExampleDecrementAction;

export interface ExampleActions {
  increment: () => void;
  decrement: () => void;
}

export function createExampleActions(
  dispatch: Dispatch<ExampleAction>,
): ExampleActions {
  function increment(): void {
    dispatch({
      type: ExampleActionTypes.INCREMENT,
    });
  }
  function decrement(): void {
    dispatch({
      type: ExampleActionTypes.DECREMENT,
    });
  }

  return {
    increment,
    decrement,
  };
}
