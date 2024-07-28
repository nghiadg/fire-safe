import type { Meta, StoryObj } from '@storybook/svelte';
import { Checkbox } from '@repo/ui';

const meta = {
  title: 'Checkbox/Checkbox',
  component: Checkbox,
  tags: ['autodocs']
  // argTypes: {}
};

export default meta;
// type Story = StoryObj<typeof meta>;

const Story = ({ ...args }) => ({
  Component: Checkbox,
  props: args
});
export const Overview = Story.bind({});
