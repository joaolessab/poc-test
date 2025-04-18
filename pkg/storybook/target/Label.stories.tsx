import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'DataDisplay/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Label Component Imported!',
  },
};

export const CustomColors: Story = {
  args: {
    text: 'Custom Label',
    backgroundColor: '#1636A8',
    textColor: '#FFFFFF',
  },
};
