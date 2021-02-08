import { useSelector } from 'react-redux';
import { ExampleState } from '../redux/exampleReducer';

export function useExampleState(): ExampleState {
  const example = useSelector<{ example: ExampleState }, ExampleState>(
    ({ example }) => example,
  );

  return example;
}
