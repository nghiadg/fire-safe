import type { Meta, StoryObj } from '@storybook/svelte';
import { Alert } from '@repo/ui';

const meta = {
  title: 'Alert/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'negative', 'positive', 'dark']
    }
  }
};

export default meta;
// type Story = StoryObj<typeof meta>;

const Story = ({ ...args }) => ({
  Component: Alert,
  props: args
});
export const Overview = Story.bind({});
