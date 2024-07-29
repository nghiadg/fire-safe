<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface $$Props extends HTMLInputAttributes {
    className?: string;
  }

  export let className = '';
  $: ({ id, ...inputProps } = $$restProps);
  $: radioClass = cx(
    'appearance-none border w-4 h-4 rounded-full border-light-ui-border-color relative peer',
    'hover:border-light-inverted-color-background',
    'disabled:border-light-disabled-background-color disabled:bg-light-disabled-background-color',
    'checked:bg-light-primary-color checked:border-light-primary-color checked:hover:border-light-primary-color',
    'after:absolute after:w-2 after:h-2 after:rounded-full after:bg-light-primary-background-color after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 checked:after:opacity-100',
    'disabled:checked:after:bg-light-disabled-text-color disabled:checked:hover:border-light-disabled-background-color',
    className
  );
</script>

<span class="flex items-center gap-2">
  <input type="radio" class={radioClass} {id} {...inputProps} />
  <label
    for={id}
    class="text-text2 text-light-primary-text-color peer-disabled:text-light-disabled-text-color"
  >
    <slot />
  </label>
</span>
