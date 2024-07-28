import type { Meta, StoryObj } from '@storybook/svelte';
import { Input } from '@repo/ui';

const meta = {
  title: 'Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
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
  Component: Input,
  props: args
});
export const Overview = Story.bind({});
