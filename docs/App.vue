<template>
  <div class="app">
    <page-header></page-header>
    <div class="main-content">
      <div class="page-container clearfix">
        <side-nav :data="navConfig['zh-CN']" base="/components"></side-nav>
        <div class="page-content">
          <router-view></router-view>
          <footer-nav></footer-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'highlight.js/styles/atom-one-dark.css'
  import navConfig from './nav.config'
  import PageHeader from './components/page-header'
  import SideNav from './components/side-nav'
  import FooterNav from './components/footer-nav'

  export default {
    name: 'App',
    components: {
      PageHeader,
      SideNav,
      FooterNav
    },
    data () {
      return {
        navConfig: navConfig
      }
    }
  }
</script>
