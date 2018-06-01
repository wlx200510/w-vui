<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" >
      <span>Varl</span>
    </h1>
    <div class="mobile-switch-lang" v-show="false">
      <span :class="{ active: $vantLang === 'en-US' }" @click="switchLang('en-US')">EN</span>
      <span :class="{ active: $vantLang === 'zh-CN' }" @click="switchLang('zh-CN')">中文</span>
    </div>
    <h2 class="zanui-desc">{{ description }}</h2>
    <div class="mobile-navs">
      <div class="mobile-nav-item" v-for="(item, index) in navList" :key="index">
        <mobile-nav v-for="(group, index) in item" :group="group" :base="'zh-CN'" :nav-key="index" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import demoConfig from '../demo.config';
import MobileNav from './MobileNav';

export default {
  data() {
    return {
      demoConfig
    };
  },

  components: {
    MobileNav
  },

  computed: {
    navList() {
      return [this.demoConfig['zh-CN'].list] || [];
    },

    description() {
      return '轻量、可靠的移动端 Vue 组件库';
    }
  },

  methods: {
    switchLang(lang) {
      // const from = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      const from = 'zh-CN';
      this.$router.push(this.$route.path.replace(from, lang));
      // setLang(lang);
    }
  }
};
</script>

<style lang="postcss">
@import '../../styles/common/var.css';

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 15px 20px;

  .zanui-title,
  .zanui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .zanui-title {
    margin: 0 0 15px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      font-size: 40px;
      margin-left: 15px;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
  }

  .zanui-desc {
    font-size: 14px;
    color: #455a64;
    margin: 0 0 60px;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 11px;
  border: 1px solid $blue;
  border-radius: 3px;
  color: $blue;
  cursor: pointer;

  span {
    width: 32px;
    line-height: 22px;
    text-align: center;
    display: inline-block;

    &.active {
      color: #fff;
      background-color: $blue;
    }
  }
}
</style>
