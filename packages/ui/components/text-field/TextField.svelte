<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import Input from '../input/Input.svelte';

  export let label = '';
  export let inforText = '';

  $: ({ state, ...inputProps } = $$restProps);
  $: inforTextClass = cx(
    'text-text2 mt-1 text-light-secondary-text-color ',
    state === 'error' && 'text-light-negative-color'
  );
</script>

<span>
  {#if label}
    <label for="" class="text-text2 mb-1 text-light-primary-text-color">{label}</label>
  {/if}
  <Input name="" {state} {...inputProps}>
    <slot name="prefix" slot="prefix" />
    <slot name="suffix" slot="suffix" />
  </Input>
  {#if inforText}
    <small class={inforTextClass}>{inforText}</small>
  {/if}
</span>
