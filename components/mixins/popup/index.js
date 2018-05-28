/**
 * 大部分组件都需要注入弹窗组件，因此把这个公共组件写在这里
 */
import manager from './manager'
import context from './context'
import scrollUtils from '../../utils/scroll'
import { on, off } from '../../utils/event'
import Touch from '../touch'

export default {
  mixins: [Touch],

  props: {
    value: Boolean,
    overlay: Boolean,
    overlayStyle: Object,
    overlayClass: String,
    closeOnClickOverlay: Boolean,
    zIndex: [String, Number],
    getContainer: Function, // return the mount node for popup
    lockScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value(val) {
      this[val ? 'open' : 'close']()
    },

    getContainer() {
      this.move()
    },

    overlay() {
      this.renderOverlay()
    }
  },

  created() {
    this._popupId = 'popup-' + context.plusKey('id')
  },

  mounted() {
    if (this.getContainer) {
      this.move()
    }
  },

  activated() {
    /* istanbul ignore next */
    if (this.value) {
      this.open();
    }
  },

  beforeDestroy() {
    this.close()
  },

  deactivated() {
    /* istanbul ignore next */
    this.close()
  },

  methods: {
    open() {
      if (this.$isServer || this.opened) {
        return
      }
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex
      }
      this.opened = true
      this.renderOverlay()

      if (this.lockScroll) { // 禁止滚动
        on(document, 'touchstart', this.touchStart)
        on(document, 'touchmove', this.onTouchMove)
        if (!context.lockCount) {
          document.body.classList.add('varl-overflow-hidden')
        }
        context.lockCount++
      }
    },

    close() {
      if (!this.opened) {
        return
      }
      if (this.lockScroll) {
        context.lockCount--
        off(document, 'touchstart', this.touchStart)
        off(document, 'touchmove', this.onTouchMove)
        if (!context.lockCount) { // 当最后一个弹出框消失时，才移除这个body上的样式
          document.body.classList.remove('varl-overflow-hidden')
        }
      }

      this.opened = false
      manager.close(this._popupId)
      this.$emit('input', false)
    },

    move() {
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el)
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el)
      }
    },

    onTouchMove(e) { // 放置手机端滚动导致的露底现象
      this.touchMove(e)
      const direction = this.deltaY > 0 ? '10' : '01'
      const el = scrollUtils.getScrollEventTarget(e.target, this.$el)
      const { scrollHeight, offsetHeight, scrollTop } = el
      let status = '11'

      if (scrollTop === 0) {
        // 如果内容小于容器则同时禁止上下滚动
        status = offsetHeight >= scrollHeight ? '00' : '01'
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        // 已经滚动到底部只能向上滚动
        status = '10'
      }

      /* istanbul ignore next */
      if (
        status !== '11' &&
        this.direction === 'vertical' &&
        // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
        !(parseInt(status, 2) & parseInt(direction, 2))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    },

    renderOverlay() {
      if (this.overlay) {
        manager.open(this, {
          zIndex: context.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        manager.close(this._popupId)
      }
      this.$el.style.zIndex = context.plusKey('zIndex')
    }
  }
}