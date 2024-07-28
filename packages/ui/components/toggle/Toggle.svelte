<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface $$Props extends HTMLInputAttributes {
    className?: string;
  }

  export let className = '';

  $: toggleClass = cx(
    'appearance-none h-6 w-[42px] bg-light-ui-border-color rounded-full relative',
    'after:absolute after:w-[18px] after:h-[18px] after:bg-light-primary-background-color after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-[3px] after:transition-all after:duration-200',
    'checked:after:translate-x-[18px] checked:bg-light-primary-color',
    'disabled:opacity-40',
    className
  );
</script>

<input type="checkbox" class={toggleClass} {...$$restProps} />
