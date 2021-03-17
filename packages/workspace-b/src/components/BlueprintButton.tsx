import React, { ReactElement } from 'react';
import { Button, Intent } from '@blueprintjs/core';

export interface BlueprintButtonProps {
  onClick?: () => void;
  children?: string;
  isPrimary?: boolean;
}

export function BlueprintButton({
  onClick,
  children,
  isPrimary = false,
}: BlueprintButtonProps): ReactElement {
  return (
    <Button
      text={children}
      intent={isPrimary ? Intent.PRIMARY : Intent.NONE}
      onClick={onClick}
    />
  );
}
