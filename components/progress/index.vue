<template>
  <div :class="b()">
    <span :class="b('portion')" :style="portionStyle"></span>
    <span :class="b('pivot')" v-show="showPivot" :style="pivotStyle">{{ pivotText }}</span>
  </div>
</template>

<style lang="postcss">
@import '../../styles/common/var.css';

.varl-progress {
  height: 10px;
  position: relative;
  border-radius: 10px;
  background: $gray-light;

  &__portion {
    left: 0;
    height: 100%;
    position: absolute;
    border-radius: 4px;
  }

  &__pivot {
    top: 50%;
    min-width: 28px;
    padding: 0 5px;
    font-size: 8px;
    margin-top: -6px;
    line-height: 12px;
    border-radius: 6px;
    position: absolute;
    text-align: center;
    box-sizing: border-box;
    background-color: $gray-light;
  }
}
</style>


<script>
  import create from '../utils/create';

  export default create({
    name: 'progress',
    props: {
      inactive: Boolean,
      percentage: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 100
      },
      showPivot: {
        type: Boolean,
        default: ture
      },
      pivotText: {
        type: String,
        default() {
          return this.percentage + '%'
        }
      },
      color: { // 默认进度条颜色
        type: String,
        default: '#38f'
      },
      textColor: {
        type: String,
        default: '#fff'
      }
    },

    computed: {
      componentColor() {
        return this.inactive ? '#cacaca' : this.color
      },
      pivotStyle() { 
        // 在进度条上的那个小块的样式 其实可以做成条 可以看到left和marginLeft都是为了那个块调整的样式
        const { percentage } = this;
        return {
          color: this.textColor,
          backgroundColor: this.componentColor,
          left: percentage <= 5 ? '0%' : percentage >= 95 ? '100%' : percentage + '%',
          marginLeft: percentage <= 5 ? '0' : percentage >= 95 ? '-28px' : '-14px'
        }
      },
      portionStyle() {
        return {
          width: this.percentage + '%',
          backgroundColor: this.componentColor // 这里支持设置为渐变色
        }
      }
    }
  })
</script>
