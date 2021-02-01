import React, { ReactElement } from 'react';

export function ExampleComponent({
  isBold,
  children,
}: {
  isBold?: boolean;
  children: string;
}): ReactElement {
  if (isBold) {
    return <div style={{ fontWeight: 'bold' }}>{children}</div>;
  }

  return <div>{children}</div>;
}
