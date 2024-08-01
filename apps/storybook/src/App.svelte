<script lang="ts">
  import { Button, Input, tooltip } from '@repo/ui';
  function handleClick() {
    console.log('handle click');
  }
</script>

<div>
  <Button on:click={handleClick} size="sm">Button</Button>
  <Input></Input>
  <div use:tooltip={{ content: 'hello world' }}>Tooltip</div>
</div>
