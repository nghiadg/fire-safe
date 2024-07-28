import type { Meta, StoryObj } from '@storybook/svelte';
import { Toggle } from '@repo/ui';

const meta = {
  title: 'Toggle/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
// type Story = StoryObj<typeof meta>;

const Story = ({ ...args }) => ({
  Component: Toggle,
  props: args
});
export const Overview = Story.bind({});
