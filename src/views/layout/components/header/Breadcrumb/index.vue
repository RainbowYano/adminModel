<template>
  <div class="breadCrumb">
    <div class="toggle" @click="toggle"><svg-icon icon-class="tree"/></div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-show="crumbList[0].path.length>0"
        v-for="item in crumbList"
        :key="item.name"
        :to="{name:item.name}"
      >{{ item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },

  computed: {
    ...mapState({ crumbList: state => state.permission.crumbList })
  },

  methods: {
    toggle() {
      console.log(1)
      this.$store.dispatch('IsCollapse').then(() => {
        // console.log(this.$store.getters.isCollapse)
      })
    }
  },

  created() {
    //  console.log(this.crumbList)
  }
};
</script>

<style lang='less' scoped>
.breadCrumb {
  display: flex;
}
.toggle:hover {
  cursor: pointer;
}
.svg-icon {
  margin-right: 10px;
}
</style>
