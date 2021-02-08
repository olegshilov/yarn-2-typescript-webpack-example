import { ExampleAction, ExampleActionTypes } from './exampleActions';

export type ExampleState = { count: number };

const INITIAL_EXAMPLE_STATE: ExampleState = {
  count: 100,
};

export function exampleReducer(
  state: ExampleState = INITIAL_EXAMPLE_STATE,
  action: ExampleAction,
): ExampleState {
  switch (action.type) {
    case ExampleActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ExampleActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
