import React, { ReactElement } from 'react';
import { SmartComponent, ComponentUsesBP } from 'workspace-b';

export function App(): ReactElement {
  return (
    <div>
      <h1>Example app</h1>
      <SmartComponent />
      <br />
      <ComponentUsesBP onClick={console.log} />
    </div>
  );
}
