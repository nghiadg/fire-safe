import type { Meta, StoryObj } from '@storybook/svelte';
import { TextField } from '@repo/ui';

const meta = {
  title: 'Input/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    inforText: {
      control: { type: 'text' }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    state: {
      control: { type: 'select' },
      options: ['error', 'positive', 'default']
    }
  }
};

export default meta;

const Story = ({ ...args }) => ({
  Component: TextField,
  props: args
});
export const Overview = Story.bind({});
