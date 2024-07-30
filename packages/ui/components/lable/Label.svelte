<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import { cva } from 'class-variance-authority';
  import type { LabelKind, LabelColor } from './Label.type';

  const labelVariants = cva(['text-text2 rounded cursor-default'], {
    variants: {
      kind: {
        fill: 'px-2 py-[1px]',
        line: 'border px-[7px]'
      },
      color: {
        primary: '',
        negative: '',
        positive: '',
        dark: ''
      }
    },
    compoundVariants: [
      {
        kind: 'fill',
        color: 'primary',
        class:
          'text-light-text-color-on-primary bg-light-primary-color hover:bg-light-primary-hover-color'
      },
      {
        kind: 'fill',
        color: 'negative',
        class:
          'text-light-text-color-on-primary bg-light-negative-color hover:bg-light-negative-color-hover'
      },
      {
        kind: 'fill',
        color: 'positive',
        class:
          'text-light-text-color-on-primary bg-light-positive-color hover:bg-light-positive-color-hover'
      },
      {
        kind: 'fill',
        color: 'dark',
        class: 'text-light-text-color-on-primary bg-light-inverted-color-background'
      },
      //   line
      {
        kind: 'line',
        color: 'primary',
        class:
          'text-light-primary-color border-light-primary-color hover:bg-light-primary-background-hover-color'
      },
      {
        kind: 'line',
        color: 'negative',
        class:
          'text-light-negative-color border-light-negative-color hover:bg-light-negative-color-selected'
      },
      {
        kind: 'line',
        color: 'positive',
        class:
          'text-light-positive-color border-light-positive-color hover:bg-light-positive-color-selected'
      },
      {
        kind: 'line',
        color: 'dark',
        class:
          'text-light-inverted-color border-light-inverted-color hover:bg-light-primary-background-hover-color'
      }
    ]
  });

  export let kind: LabelKind = 'fill';
  export let color: LabelColor = 'primary';

  $: labelClass = cx(labelVariants({ kind, color }));
</script>

<span class={labelClass}>
  <slot />
</span>
