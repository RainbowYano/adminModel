<template>
  <div class="layout">
    <el-container>
      <!-- Aside -->
        <aside-nav></aside-nav>
      <el-container>
        <!-- Header -->
        <el-header>
          <header-nav></header-nav>
        </el-header>
        <!-- Main -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import headerNav from './components/header/index'
import asideNav from './components/aside/index'
export default {
  data() {
    return {};
  },
  components: {
      headerNav,
      asideNav
  },

  methods: {},

  created() {}
};
</script>

<style lang='less'>
.layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    display: flex;
    align-items: center;
  }
  // .el-aside {
  //   height: 100%;
  //   width: auto !important;
  //   background-color: #545C64;
  //   overflow: hidden;
  // }
}
</style>
<style lang='less' scoped>
</style>
