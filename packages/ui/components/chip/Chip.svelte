<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import { cva } from 'class-variance-authority';
  import type { ChipKind } from './Chip.type';

  const chipVariants = cva(['rounded text-text2 text-light-primary-text-color px-2 py-0.5'], {
    variants: {
      kind: {
        primary: 'bg-light-primary-selected-color',
        positive: 'bg-light-positive-color-selected',
        negative: 'bg-light-negative-color-selected',
        warning: 'bg-light-primary-warning-color-selected'
      }
    }
  });

  export let kind: ChipKind = 'primary';
  export let disabled: boolean = false;
  export let className = '';

  $: chipClass = cx(chipVariants({ kind }), disabled && 'opacity-40', className);
</script>

<span class={chipClass}>
  <slot />
</span>
