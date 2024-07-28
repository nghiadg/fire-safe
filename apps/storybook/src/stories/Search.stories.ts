import type { Meta, StoryObj } from '@storybook/svelte';
import { Search } from '@repo/ui';

const meta = {
  title: 'Search/Search',
  component: Search,
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
// type Story = StoryObj<typeof meta>;

const Story = ({ ...args }) => ({
  Component: Search,
  props: args
});
export const Overview = Story.bind({});
