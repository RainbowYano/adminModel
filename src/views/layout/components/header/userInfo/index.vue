<template>
 <div class="userInfo">
  <el-button type="primary" round @click.native="logOut">退出</el-button>
 </div>
</template>

<script>
export default {

 data () {
 return {
 }
 },

 methods: {
   logOut() {
     this.$store.dispatch('LogOUt').then(()=> {
       location.reload()
      //  this.$router.push({name: 'login'})
     })
   }
 },

 created () {
 }
}
</script>

<style lang='less' scoped>

</style>
