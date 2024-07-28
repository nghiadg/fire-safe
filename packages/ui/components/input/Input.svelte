<script lang="ts">
  import { cva } from 'class-variance-authority';
  import { cx } from '../../helpers/tailwindcss.helper';
  import type { InputSize } from './Input.type';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface $$Props extends Omit<HTMLInputAttributes, 'size'> {
    size?: InputSize;
    state?: 'error' | 'positive' | 'default';
    wrapperClass?: string;
    inputClass?: string;
  }

  const inputVariants = cva(
    [
      'flex items-center [&>input]:flex-1 [&>input]:outline-none has-[input:focus]:border-light-primary-color [&>input]:placeholder:text-light-secondary-text-color',
      'rounded border border-light-ui-border-color px-3 text-text1 text-light-primary-text-color w-full',
      'hover:border-light-primary-text-color',
      'disabled:border-light-disabled-text-color disabled:bg-light-disabled-background-color'
    ],
    {
      variants: {
        size: {
          sm: 'h-[32px]',
          md: 'h-[40px]',
          lg: 'h-[48px]'
        },
        state: {
          default: '',
          error:
            'border-light-negative-color hover:border-light-negative-color has-[input:focus]:border-light-negative-color',
          positive:
            'border-light-positive-color hover:border-light-positive-color has-[input:focus]:border-light-positive-color'
        }
      }
    }
  );

  export let size: InputSize = 'sm';
  export let state: 'error' | 'positive' | 'default' = 'default';
  export let wrapperClass: string = '';
  export let inputClass: string = '';

  $: wrapperClass = cx(inputVariants({ size, state }), wrapperClass);
</script>

<span class={wrapperClass}>
  <slot name="prefix" />
  <input {...$$restProps} class={cx(inputClass)} aria-invalid={state === 'error'} />
  <slot name="suffix" />
</span>
