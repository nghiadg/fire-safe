<script lang="ts">
  import { cx } from '../../helpers/tailwindcss.helper';
  import { cva } from 'class-variance-authority';

  const avatarVariants = cva(['rounded-full overflow-hidden'], {
    variants: {
      size: {
        sm: 'w-6 h-6 text-[12px] leading-[20px]',
        md: 'w-8 h-8 text-text1',
        lg: 'w-12 h-12 text-h3'
      },
      type: {
        img: '',
        text: 'flex items-center justify-center bg-light-primary-color text-light-text-color-on-primary'
      }
    }
  });

  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let type: 'img' | 'text' = 'img';
  export let src: string = '';
  export let alt: string = '';
  export let text: string = '';
  export let className: string = '';

  $: avatarClass = cx(avatarVariants({ size, type }), className);
</script>

<div class={avatarClass}>
  {#if type === 'img'}
    <img {src} {alt} class="w-full h-full object-cover" />
  {/if}
  {#if type === 'text'}
    <span>{text}</span>
  {/if}
</div>
