<template>
  <div :class="[b(), { 'varl-hairline--top-bottom': border }]">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create/create-basic';

export default create({
  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
});
</script>

<style lang="postcss">
@import '../../styles/common/hairline.css';
</style>

