import Vue from 'vue';
import Modal from './Modal';
import context from './context';

const defaultConfig = {
  className: '',
  customStyle: {}
}

export default {
  /**
   * 这里写的是对话框的通用method
   * 包含打开 关闭 更新 等事件
   */
  open(vm, config) {
    /* istanbul ignore next */
    if (!context.stack.some(item => item.vm._popupId === vm._popupId)) { // 要打开的对话框不在已有堆栈中
      const el = vm.$el
      const targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body
      context.stack.push({vm, config, targetNode})
      this.update()
    }
  },
  
  update() {
    let { modal } = context;

    if (!modal) {
      modal = new (Vue.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick)
      // 此时的modal并未挂载到dom上
      context.modal = modal
    }

    if (modal.$el.parentNode) { // bug fix
      modal.visible = false
    }

    if (context.top) {
      const { targetNode, config } = context.top;

      targetNode.appendChild(modal.$el)
      Object.assign(modal, {
        ...defaultConfig,
        ...config,
        visible: true
      })
    }
  },

  close(id) {
    const { stack } = context;

    if (stack.length) {
      if (context.top.vm._popupId === id) { // 只有要关闭的正好是最上层的vm时才生效
        stack.pop() // 关闭后要及时出栈
        this.update()
      } else {
        context.stack = stack.filter(item => item.vm._popupId !== id)
      }
    }
  },

  onClick() {
    if (context.top) {  //只针对最外层的弹窗进行操作
      const { vm } = context.top
      vm.$emit('click-overlay')
      vm.closeOnClickOverlay && vm.$emit('input', false)
    }
  }
}