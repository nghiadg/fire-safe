import type { Meta, StoryObj } from '@storybook/svelte';
import { Button } from '@repo/ui';

const meta = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg']
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'negative',
        'positive',
        'on-primary',
        'on-negative',
        'on-inverted',
        'on-positive'
      ]
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
// type Story = StoryObj<typeof meta>;

const Story = ({ ...args }) => ({
  Component: Button,
  props: args
});
export const Overview = Story.bind({});
