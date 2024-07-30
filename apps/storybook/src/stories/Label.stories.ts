import type { Meta, StoryObj } from '@storybook/svelte';
import { Label } from '@repo/ui';

const meta = {
  title: 'Media/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'negative', 'positive', 'dark']
    },
    kind: {
      control: { type: 'select' },
      options: ['fill', 'line']
    }
  }
};

export default meta;
// type Story = StoryObj<typeof meta>;

const Story = ({ ...args }) => ({
  Component: Label,
  props: args
});
export const Overview = Story.bind({});
