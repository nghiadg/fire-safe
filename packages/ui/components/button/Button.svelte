<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import type { ButtonColor, ButtonKind, ButtonSize } from './Button.type';
  import { cva } from 'class-variance-authority';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface $$Props extends HTMLButtonAttributes {
    size?: ButtonSize;
    kind?: ButtonKind;
    color?: ButtonColor;
    className?: string;
  }

  const buttonVariants = cva(['rounded'], {
    variants: {
      size: {
        xs: 'text-text2 py-0.5 px-2',
        sm: 'text-text2 py-1.5 px-2',
        md: 'text-text1 py-[9px] px-4',
        lg: 'text-text1 py-[13px] px-6'
      },
      color: {
        primary: '',
        negative: '',
        positive: '',
        'on-primary': '',
        'on-negative': '',
        'on-inverted': '',
        'on-positive': ''
      },
      kind: {
        primary: '',
        secondary: '',
        tertiary: ''
      }
    },
    compoundVariants: [
      {
        size: 'xs',
        kind: 'secondary',
        class: 'py-[1px] px-[7px]'
      },
      {
        size: 'sm',
        kind: 'secondary',
        class: 'py-[5px] px-[7px]'
      },
      {
        size: 'md',
        kind: 'secondary',
        class: 'py-2 px-[15px]'
      },
      {
        size: 'lg',
        kind: 'secondary',
        class: 'py-3 px-[23px]'
      },
      // Primary
      {
        kind: 'primary',
        color: 'primary',
        class: [
          'bg-light-primary-color hover:bg-light-primary-hover-color active:bg-light-primary-hover-color text-light-text-color-on-primary',
          'disabled:bg-light-disabled-background-color disabled:text-light-disabled-text-color'
        ]
      },
      {
        kind: 'primary',
        color: 'negative',
        class: [
          'bg-light-negative-color hover:bg-light-negative-color-hover active:bg-light-negative-color-hover text-light-text-color-on-primary',
          'disabled:bg-light-disabled-background-color disabled:text-light-disabled-text-color'
        ]
      },
      {
        kind: 'primary',
        color: 'positive',
        class: [
          'bg-light-positive-color hover:bg-light-positive-color-hover active:bg-light-positive-color-hover text-light-text-color-on-primary',
          'disabled:bg-light-disabled-background-color disabled:text-light-disabled-text-color'
        ]
      },
      {
        kind: 'primary',
        color: 'on-primary',
        class: [
          'bg-light-primary-background-color hover:bg-light-primary-background-hover-color active:bg-light-primary-background-hover-color text-light-primary-color',
          'disabled:bg-light-primary-background-hover-color disabled:text-light-primary-color disabled:opacity-50'
        ]
      },
      {
        kind: 'primary',
        color: 'on-negative',
        class: [
          'bg-light-primary-background-color hover:bg-light-primary-background-hover-color active:bg-light-primary-background-hover-color text-light-negative-color',
          'disabled:bg-light-primary-background-hover-color disabled:text-light-negative-color disabled:opacity-50'
        ]
      },
      {
        kind: 'primary',
        color: 'on-inverted',
        class: [
          'bg-light-primary-background-color hover:bg-light-primary-background-hover-color active:bg-light-primary-background-hover-color text-light-primary-text-color',
          'disabled:bg-light-primary-background-hover-color disabled:text-light-primary-text-color disabled:opacity-50'
        ]
      },
      {
        kind: 'primary',
        color: 'on-positive',
        class: [
          'bg-light-primary-background-color hover:bg-light-primary-background-hover-color active:bg-light-primary-background-hover-color text-light-positive-color',
          'disabled:bg-light-primary-background-hover-color disabled:text-light-positive-color disabled:opacity-50'
        ]
      },
      // Secondary
      {
        kind: 'secondary',
        color: 'primary',
        class: [
          'bg-light-primary-background-color hover:bg-light-primary-background-hover-color text-light-primary-text-color border border-light-ui-border-color',
          'disabled:bg-light-primary-background-hover-color disabled:text-light-primary-text-color disabled:opacity-50 disabled:border-light-disabled-text-color',
          'active:border-light-primary-color active:bg-light-primary-selected-color'
        ]
      },
      {
        kind: 'secondary',
        color: 'negative',
        class: [
          'bg-light-primary-background-color hover:bg-light-negative-color-selected text-light-negative-color border border-light-negative-color',
          'disabled:bg-light-primary-background-hover-color disabled:text-light-primary-text-color disabled:opacity-50 disabled:border-light-disabled-text-color',
          'active:bg-light-negative-color-selected'
        ]
      },
      {
        kind: 'secondary',
        color: 'negative',
        class: [
          'bg-light-primary-background-color hover:bg-light-positive-color-selected text-light-positive-color border border-light-positive-color',
          'disabled:bg-light-primary-background-hover-color disabled:text-light-primary-text-color disabled:opacity-50 disabled:border-light-disabled-text-color',
          'active:bg-light-positive-color-selected'
        ]
      }
      //   TODO: more configs
    ]
  });

  export let size: ButtonSize = 'lg';
  export let kind: ButtonKind = 'primary';
  export let color: ButtonColor = 'primary';
  export let className = '';

  $: buttonClass = cx(buttonVariants({ size, kind, color }), className);
</script>

<button {...$$restProps} class={buttonClass} on:click>
  <slot />
</button>
