<script lang="ts">
  import { Button, Input, TextField } from '@repo/ui';
  function handleClick() {
    console.log('handle click');
  }
</script>

<div>
  <Button on:click={handleClick} size="sm">Button</Button>
  <Input></Input>
  <TextField label="Lable">
    <span slot="prefix">prefix</span>
  </TextField>
</div>
