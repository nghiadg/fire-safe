import type { Meta, StoryObj } from '@storybook/svelte';
import { Chip } from '@repo/ui';

const meta = {
  title: 'Media/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['primary', 'positive', 'negative', 'warning']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;

const Story = ({ ...args }) => ({
  Component: Chip,
  props: args
});
export const Overview = Story.bind({});
