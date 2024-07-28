import type { Meta, StoryObj } from '@storybook/svelte';
import { IconButton } from '@repo/ui';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg']
    },

    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;

const Story = ({ ...args }) => ({
  Component: IconButton,
  props: args
});
export const Overview = Story.bind({});
