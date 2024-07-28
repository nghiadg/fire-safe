<script lang="ts">
  import { Button, Input, Checkbox } from '@repo/ui';
  function handleClick() {
    console.log('handle click');
  }
</script>

<div>
  <Button on:click={handleClick} size="sm">Button</Button>
  <Input></Input>
  <Checkbox id="regular">Regular</Checkbox>
  <Checkbox id="disabled" disabled>Regular disabled</Checkbox>
</div>
