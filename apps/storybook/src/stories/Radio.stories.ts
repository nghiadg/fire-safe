import type { Meta, StoryObj } from '@storybook/svelte';
import { Radio } from '@repo/ui';

const meta = {
  title: 'Radio/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;

const Story = ({ ...args }) => ({
  Component: Radio,
  props: args
});
export const Overview = Story.bind({});
