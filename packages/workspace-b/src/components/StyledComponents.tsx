import styled from 'astroturf/react';

export const AstroturfButton = styled<'button', { primary?: boolean }>(
  'button',
)`
  color: black;
  border: 1px solid black;
  background-color: white;

  &.primary {
    color: blue;
    border: 1px solid blue;
  }

  &.color-green {
    color: green;
  }
`;

export const SimpleContainer = styled('div')`
  padding: 1rem;
  margin: 1rem;
  border-radius: 2px;
  border: 1px solid red;
`;
