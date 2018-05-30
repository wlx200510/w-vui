<template>
  <div class="page-header">
    <div :class="bem('top')">
      <h1 :class="bem('logo')"><a href="#">Varl</a></h1>
      <ul :class="bem('navs')">
        <li :class="bem('item')">
          <a href="/" :class="bem('link')">组件</a>
        </li>
        <li :class="bem('item')">
          <a href="https://github.com/wlx200510/varl_components" :class="bem('github')" target="_blank"></a>
        </li>
        <li :class="bem('item')">
          <span :class="bem('link')"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  mounted() {
    const _this = this
    let timer
    window.addEventListener('scroll', () => {
      clearTimeout(timer)
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      timer = setTimeout(() => {
        _this.scrollTop = scrollTop // 本地记录滚动位置的延时方式
      }, 500)
    })
  },
  methods: {
    bem(ele, mod) {
      const ELEMENT = '__';
      const MODS = '--';
      const name = 'page-header'
      let eleClassName =  ele ? name + ELEMENT + ele : name
      let modClassName = mod ? eleClassName + MODS + mod : eleClassName
      return modClassName
    }
  }
}
</script>

<style lang="postcss">
.page-header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;

  &__top {
    overflow: hidden;
    height: 60px;
    background-color: #fbfbfb;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
  }

  &__logo {
    float: left;

    a {
      display: block;
      height: 40px;
      line-height: 40px;
      background-image: url(https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png);
      background-size: contain;
      background-repeat: no-repeat;
      margin: 10px 0 0 20px;
      padding-left: 45px;
      font-size: 25px;
      font-family: monospace;
      color: #2c3e50;
    }
  }

  &__navs {
    float: right;
  }

  &__item {
    float: left;
    height: 50px;
  }

  &__link {
    display: block;
    line-height: 60px;
    color: #333;
    font-size: 16px;
    margin: 0 20px;

    &:hover {
      color: #3388FF;
    }

    &:active {
      color: #3388ff;
    }
  }

  &__github {
    display: inline-block;
    width: 22px;
    height: 60px;
    overflow: hidden;
    background-image: url(https://img.yzcdn.cn/upload_files/2017/03/30/Fil9peDfgzvk3kj-oFCsElS4FS1x.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 17px;
  }
}
</style>
