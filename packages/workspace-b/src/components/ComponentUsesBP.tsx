import React, { ReactElement } from 'react';
import { Button } from '@blueprintjs/core/lib/cjs/components/button/buttons';
import { Intent } from '@blueprintjs/core/lib/cjs/common';
import { SimpleContainer, AstroturfButton } from './StyledComponents';

interface ComponentUsesBPProps {
  onClick?: () => void;
}

export function ComponentUsesBP({
  onClick,
}: ComponentUsesBPProps): ReactElement {
  return (
    <SimpleContainer>
      <Button
        text="Blueprint button"
        intent={Intent.SUCCESS}
        onClick={onClick}
      />
      <br />
      <AstroturfButton primary>AstroturfButton</AstroturfButton>
    </SimpleContainer>
  );
}
