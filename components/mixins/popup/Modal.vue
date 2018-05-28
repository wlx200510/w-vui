<template>
  <transition name="varl-fade">
    <div v-show="visible" class="varl-modal" :class="className"
      :style="style" @touchmove.prevent.stop @click="$emit('click', $event)"></div>
  </transition>
</template>

<script>
export default {
  name: 'modal',

  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  }
}
</script>
