export default {
  id: 1,
  zIndex: 2000,
  stack: [],
  lockCount: 0,

  plusKey(key) {
    return this[key]++ // 用于标识id
  },

  get top() {
    return this.stack[this.stack.length - 1]
  }
}