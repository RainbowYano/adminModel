<template>
 <div>
 <h1>home</h1>
 <input type="text" v-focus>
 <chart></chart>
 </div>
</template>

<script>
import focus from '../../directives/focus/index'
import chart from '../../components/charts/test/index'
export default {

 data () {
 return {
 }
 },

 methods: {},

 created () {
   console.log(focus)
 },
 components: {
   chart
 },
 directives: {
   focus
 }
}
</script>

<style lang='less' scoped>

</style>
