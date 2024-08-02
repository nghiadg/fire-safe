<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import { cva } from 'class-variance-authority';

  const alertVariants = cva(['text-text2 h-10 w-full flex items-center justify-center'], {
    variants: {
      type: {
        primary: 'bg-light-primary-color text-light-text-color-on-primary',
        negative: 'bg-light-negative-color text-light-text-color-on-primary',
        positive: 'bg-light-positive-color text-light-text-color-on-primary',
        dark: 'bg-light-inverted-color-background text-light-text-color-on-inverted'
      }
    }
  });

  export let type: 'primary' | 'positive' | 'negative' | 'dark' = 'primary';
  $: alertClass = cx(alertVariants({ type }));
</script>

<div class={alertClass}>Alert banner message</div>
