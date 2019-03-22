<template>
 <div class="header">
   <bread-crumb></bread-crumb>
   <user-info></user-info>
 </div>
</template>

<script>
import breadCrumb from  './Breadcrumb/index'
import userInfo from './userInfo/index'
export default {

 data () {
 return {
 }
 },

 components: {
   breadCrumb,
   userInfo
 },

 methods: {},

 created () {
 }
}
</script>

<style lang='less' scoped>
  .header {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
