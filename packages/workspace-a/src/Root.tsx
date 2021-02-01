import React, { ReactElement } from 'react';
import { ExampleComponent } from 'workspace-b';

export function Root(): ReactElement {
  return (
    <div>
      <h1>Root</h1>
      <ExampleComponent isBold>ExampleComponent</ExampleComponent>
    </div>
  );
}
