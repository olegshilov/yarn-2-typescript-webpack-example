import React from 'react';
import {
  BlueprintButton as BlueprintButtonComponent,
  BlueprintButtonProps,
} from './BlueprintButton';
import type { Story, Meta } from '@storybook/react';

export default {
  title: 'workspace-b/BlueprintButton',
  component: BlueprintButtonComponent,
} as Meta;

const Template: Story<BlueprintButtonProps> = (args) => (
  <BlueprintButtonComponent {...args} />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  isPrimary: true,
  children: 'Primary Button',
};
