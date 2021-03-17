import React, { ReactElement } from 'react';
import { Button } from '@blueprintjs/core/lib/cjs/components/button/buttons';
import { Intent } from '@blueprintjs/core/lib/cjs/common';

interface ComponentUsesBPProps {
  onClick?: () => void;
  children?: string;
}

export function ComponentUsesBP({
  onClick,
  children,
}: ComponentUsesBPProps): ReactElement {
  return <Button text={children} intent={Intent.SUCCESS} onClick={onClick} />;
}
