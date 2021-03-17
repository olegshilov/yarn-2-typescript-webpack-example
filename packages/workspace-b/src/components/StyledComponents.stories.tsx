import React, { ReactNode } from 'react';
import { StyledButton as StyledButtonComponent } from './StyledComponents';
import type { Story, Meta } from '@storybook/react';

export default {
  title: 'workspace-b/StyledButton',
  component: StyledButtonComponent,
} as Meta;

const Template: Story<{
  primary?: boolean;
  color?: 'green';
  children: ReactNode;
}> = (args) => <StyledButtonComponent {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
  children: 'Primary Button',
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  color: 'green',
  children: 'Green Button',
};
