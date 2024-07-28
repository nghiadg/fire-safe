<script lang="ts">
  import Input from '../input/Input.svelte';
  import IconButton from '../icon-button/IconButton.svelte';
  import IconSearch from '../icons/IconSearch.svelte';
  import { cx } from '../../helpers/tailwindcss.helper';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClickButtonSearch(event: MouseEvent) {
    dispatch('search', event);
  }

  $: ({ wrapperClass, ...inputProps } = $$restProps);
</script>

<Input wrapperClass={cx('pr-1', wrapperClass)} {...inputProps}>
  <IconButton slot="suffix" size="xs" kind="tertiary" on:click={handleClickButtonSearch}>
    <IconSearch />
  </IconButton>
</Input>
