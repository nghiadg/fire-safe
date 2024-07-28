<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { cx } from '../../helpers/tailwindcss.helper';

  interface $$Props extends HTMLInputAttributes {
    className?: string;
  }

  export let className = '';
  $: ({ disabled, id, ...inputProps } = $$restProps);
  $: checkboxClass = cx(
    'w-0 h-0 relative absolute peer',
    'before:w-4 before:h-4 before:absolute before:border before:rounded-sm before:border-light-ui-border-color',
    'hover:before:border-light-inverted-color-background',
    'disabled:before:bg-light-disabled-background-color disabled:before:border-light-ui-border-color',
    'checked:before:bg-light-primary-color checked:before:border-light-primary-color',
    'checked:hover:before:bg-light-primary-hover-color checked:hover:before:border-light-primary-hover-color',
    'checked:disabled:before:bg-light-disabled-background-color checked:disabled:before:border-light-ui-border-color',
    'indeterminate:before:bg-light-primary-color indeterminate:before:border-light-primary-color',
    'indeterminate:hover:before:bg-light-primary-hover-color indeterminate:hover:before:border-light-primary-hover-color',
    'indeterminate:disabled:before:bg-light-disabled-background-color indeterminate:disabled:before:border-light-ui-border-color',
    // checked icon
    'checked:after:opacity-100 after:opacity-0 checked:after:w-[10px] checked:after:h-[6px] after:border-light-primary-background-color checked:after:border-l checked:after:border-b checked:after:-rotate-45 after:absolute checked:after:top-[3px] checked:after:left-[3px]',
    // indeterminate icon
    'indeterminate:after:opacity-100 after:w-2.5 after:border-b after:border-light-primary-background-color after:top-2 after:left-[3px]',
    'disabled:after:border-light-disabled-text-color',
    className
  );
</script>

<span class="flex items-center gap-2">
  <span class="inline-block w-4 h-4 relative">
    <input type="checkbox" class={checkboxClass} {id} {disabled} {...inputProps} />
  </span>
  <label
    for={id}
    class={cx(
      'select-none text-text2 text-light-primary-text-color',
      disabled && 'text-light-disabled-text-color'
    )}
  >
    <slot />
  </label>
</span>
