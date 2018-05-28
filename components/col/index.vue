<template>
  <div class="varl-col" :class="{ [`varl-col-${span}`]: span, [`varl-col-offset-${offset}`]: offset}"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import create from '../utils/create'

export default create({
  name: 'col',

  props: {
    span: [Number, String],
    offset: [Number, String]
  },

  computed: {
    gutter() {
      return (this.$parent && Number(this.$parent.gutter)) || 0;
    },
    style() {
      const padding = `${this.gutter / 2}px`;
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {}
    }
  }
})
</script>

<style lang="postcss">
@import '../../styles/common/var.css';

.varl-col {
  float: left;
  box-sizing: border-box;
}

@for $i from 1 to 24 {
  .varl-col-$i { width: calc($i * 100% / 24); }
  .varl-col-offset-$i { margin-left: calc($i * 100% /24); }
}
</style>
