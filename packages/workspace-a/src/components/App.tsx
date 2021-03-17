import React, { ReactElement } from 'react';
import {
  SmartComponent,
  BlueprintButton,
  SimpleContainer,
  StyledButton,
} from 'workspace-b';

export function App(): ReactElement {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Example app</h1>
      <SimpleContainer>
        <h3>Redux example</h3>
        <SmartComponent isBold />
      </SimpleContainer>
      <SimpleContainer>
        <h3>Styled components example</h3>
        <p>
          Button exported from blueprint
          <br />
          <BlueprintButton onClick={console.log}>
            Blueprint button
          </BlueprintButton>
        </p>
        <p>
          Button which use astroturf for styles
          <br />
          <StyledButton primary onClick={console.log}>
            StyledButton
          </StyledButton>
        </p>
      </SimpleContainer>
    </div>
  );
}
