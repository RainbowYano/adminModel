<template>
    <el-scrollbar wrap-class="scrollbar-wrapper" class="navaside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse-transition="true"
      :collapse="isCollapse"
    >
      <el-menu-item index="/">
         <svg-icon icon-class="tree" />
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu :index="i + ''" v-for="(item,i) in sidebarMenU" :key="item.path"  v-show="item.name!=='首页'">
        <template slot="title">
          <svg-icon icon-class="user" />
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item.path+ '/' + subitem.path" v-for="subitem in item.children" :key="subitem.path">{{ item.meta.title }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </el-scrollbar>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState({sidebarMenU: state=> state.permission.sidebarMenU}),
    ...mapState({isCollapse: state=> state.app.isCollapse}),

  },

  methods: {},

  created() {
    // console.log(123)
    console.log(this.isCollapse)
  }
};
</script>

<style lang='less'>
    .el-menu {
      height: 100%;
      text-align: left;
      border-right:none;
    }
    .svg-icon {
      margin-right: 10px;
    }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .navaside {
    background-color: #545C64;
  }
</style>
<style lang='less' scoped>
</style>
