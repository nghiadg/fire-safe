import type { Meta, StoryObj } from '@storybook/svelte';
import { Avatar } from '@repo/ui';

const meta = {
  title: 'Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    type: {
      control: { type: 'select' },
      options: ['img', 'text']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;
// type Story = StoryObj<typeof meta>;

const Story = ({ ...args }) => ({
  Component: Avatar,
  props: args
});
export const Overview = Story.bind({});
