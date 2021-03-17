import styled from 'astroturf/react';

export const StyledButton = styled<
  'button',
  { primary?: boolean; color?: 'green' }
>('button')`
  display: inline-block;
  cursor: pointer;
  appearance: none;
  border-radius: 4px;
  padding: 4px 8px;
  line-height: 20px;
  font-size: 14px;
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
  margin: 1rem 0;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
