<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import { cva } from 'class-variance-authority';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { IconButtonKind, IconButtonSize } from './IconButton.type';

  interface $$Props extends HTMLButtonAttributes {
    size?: IconButtonSize;
    kind?: IconButtonKind;
    className?: string;
  }

  const iconButtonVariants = cva(['rounded flex items-center justify-center'], {
    variants: {
      size: {
        xxs: 'w-4 h-4 text-[14px] line-height-[14px]',
        xs: 'w-6 h-6 text-[16px] line-height-[16px]',
        sm: 'w-8 h-8 text-[20px] line-height-[20px]',
        md: 'w-10 h-10 text-[20px] line-height-[20px]',
        lg: 'w-12 h-12 text-[20px] line-height-[20px]'
      },
      kind: {
        primary: [
          'bg-light-primary-color text-light-text-color-on-primary',
          'hover:bg-light-primary-hover-color',
          'active:bg-light-primary-selected-color active:text-light-icon-color',
          'disabled:bg-light-disabled-background-color disabled:text-light-icon-color'
        ],
        secondary: [
          'border border-light-ui-border-color text-light-icon-color',
          'hover:bg-light-primary-background-hover-color',
          'active:border-light-primary-color active:bg-light-primary-selected-color',
          'disabled:bg-light-disabled-background-color disabled:active:border-light-ui-border-color'
        ],
        tertiary: [
          'text-light-icon-color',
          'hover:bg-light-primary-background-hover-color',
          'active:bg-light-primary-selected-color',
          'disabled:bg-light-disabled-background-color'
        ]
      }
    }
  });

  export let size: IconButtonSize = 'sm';
  export let kind: IconButtonKind = 'primary';
  export let className = '';

  $: iconButtonClass = cx(iconButtonVariants({ size, kind }), className);
</script>

<button class={iconButtonClass} {...$$restProps} on:click>
  <slot />
</button>
